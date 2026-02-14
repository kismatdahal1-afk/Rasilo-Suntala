// Admin authentication
const ADMIN_PASSWORD = 'admin123';

// Price per KG for custom quantities
const PRICE_PER_KG = 100;

// Check if admin is logged in
document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is already logged in
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showDashboard();
    } else {
        hideDashboard();
    }
});

// Check admin login
function checkAdminLogin() {
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        showDashboard();
        loadOrders();
    } else {
        alert('Incorrect password!');
    }
}

// Logout admin
function logoutAdmin() {
    sessionStorage.removeItem('adminLoggedIn');
    hideDashboard();
    document.getElementById('adminPassword').value = '';
}

// Show dashboard
function showDashboard() {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('dashboardContent').classList.remove('hidden');
    loadOrders();
}

// Hide dashboard
function hideDashboard() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('dashboardContent').classList.add('hidden');
}

// Load all orders
function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    displayOrders(orders);
    updateSummary(orders);
}

// Calculate order amount based on quantity
function calculateOrderAmount(quantity) {
    quantity = parseFloat(quantity || 0);
    
    // Check if quantity matches package prices
    if (quantity === 2) {
        return 200;      // 2kg package price
    } else if (quantity === 5) {
        return 500;      // 5kg package price
    } else if (quantity === 10) {
        return 1000;     // 10kg package price
    } else {
        // For custom quantities, calculate at ₹100 per kg
        return Math.round(quantity * PRICE_PER_KG);
    }
}

// Display orders in table
function displayOrders(orders) {
    const tableBody = document.getElementById('ordersTableBody');
    const tableFooter = document.getElementById('ordersTableFooter');
    
    if (orders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="12" style="text-align: center; padding: 2rem;">No orders found</td></tr>';
        if (tableFooter) {
            tableFooter.innerHTML = '';
        }
        return;
    }
    
    // Sort orders by timestamp (newest first)
    orders.sort((a, b) => b.timestamp - a.timestamp);
    
    let html = '';
    let totalOrderAmount = 0;
    let totalSoldAmount = 0;
    
    orders.forEach((order, index) => {
        // Calculate order amount if not present
        let orderAmount = order.orderAmount;
        if (!orderAmount) {
            orderAmount = calculateOrderAmount(order.quantity);
        }
        
        // Calculate sold amount (only if delivered)
        let soldAmount = 0;
        if (order.status === 'delivered') {
            soldAmount = order.soldAmount || orderAmount;
        }
        
        totalOrderAmount += orderAmount;
        totalSoldAmount += soldAmount;
        
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${order.orderDate || 'N/A'}</td>
                <td>${order.name || 'N/A'}</td>
                <td>${order.phone || 'N/A'}</td>
                <td>${order.address || 'N/A'}</td>
                <td>${order.quantity || '0'} KG</td>
                <td>रू ${orderAmount.toLocaleString('en-IN')}</td>
                <td>रू ${soldAmount.toLocaleString('en-IN')}</td>
                <td>${formatDate(order.deliveryDate) || 'N/A'}</td>
                <td>${order.deliveryTime || 'N/A'}</td>
                <td>
                    <div class="status-checkbox">
                        <input type="checkbox" id="status_${order.id}" 
                            ${order.status === 'delivered' ? 'checked' : ''} 
                            onchange="updateOrderStatus(${order.id}, this.checked)">
                        <span class="${order.status === 'delivered' ? 'delivered' : 'pending'}">
                            ${order.status === 'delivered' ? 'Delivered' : 'Pending'}
                        </span>
                    </div>
                </td>
                <td>
                    <button onclick="deleteOrder(${order.id})" class="delete-btn">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
    
    // Add footer with totals
    if (tableFooter) {
        const t = typeof translations !== 'undefined' ? translations[currentLanguage] : null;
        const totalLabel = t ? t['total-amount'] : 'Total Amount:';
        
        tableFooter.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: right; font-weight: bold;">${totalLabel}</td>
                <td style="font-weight: bold; color: var(--green-dark);">रू ${totalOrderAmount.toLocaleString('en-IN')}</td>
                <td style="font-weight: bold; color: var(--orange-primary);">रू ${totalSoldAmount.toLocaleString('en-IN')}</td>
                <td colspan="4"></td>
            </tr>
        `;
    }
}

// Update order status
function updateOrderStatus(orderId, isDelivered) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    const orderIndex = orders.findIndex(o => o.id == orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = isDelivered ? 'delivered' : 'pending';
        
        // If delivered, set sold amount equal to order amount
        if (isDelivered) {
            orders[orderIndex].soldAmount = calculateOrderAmount(orders[orderIndex].quantity);
        } else {
            orders[orderIndex].soldAmount = 0;
        }
        
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrders(); // Reload to update summary
    }
}

// Delete order
function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders = orders.filter(order => order.id != orderId);
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrders();
    }
}

// Update summary cards
function updateSummary(orders) {
    const totalOrders = orders.length;
    const deliveredOrders = orders.filter(o => o.status === 'delivered').length;
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    
    // Calculate total KG sold (only delivered orders)
    const totalKgSold = orders
        .filter(o => o.status === 'delivered')
        .reduce((sum, order) => sum + parseFloat(order.quantity || 0), 0);
    
    // Calculate pending KG (only pending orders)
    const pendingKg = orders
        .filter(o => o.status === 'pending')
        .reduce((sum, order) => sum + parseFloat(order.quantity || 0), 0);
    
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('deliveredOrders').textContent = deliveredOrders;
    document.getElementById('pendingOrders').textContent = pendingOrders;
    document.getElementById('pendingKg').textContent = pendingKg.toFixed(1);
    document.getElementById('totalKg').textContent = totalKgSold.toFixed(1);
}

// Format date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
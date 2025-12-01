let currentUser = null;
let users = [];
let requests = [];

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');

    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    if (viewId.includes("login")) document.getElementById("nav-login").classList.add("active");
    if (viewId.includes("buyer")) document.getElementById("nav-buyer").classList.add("active");
    if (viewId.includes("supplier")) document.getElementById("nav-supplier").classList.add("active");
    if (viewId.includes("admin")) document.getElementById("nav-admin").classList.add("active");

    // refresh data for each view
    if (viewId === "buyer-view") {
        loadBuyerRequests();
    }
    if (viewId === "supplier-view") {
        loadSupplierRequests();
    }
    if (viewId === "admin-view") {
        updateAdminStats();
    }
}
function login() {
    const name = document.getElementById("login-username").value.trim();
    const role = document.getElementById("login-role").value;

    if (!name) return;

    currentUser = { name, role };
    users.push({ name, role });

    document.getElementById("current-user-box").textContent = "Logged in as: " + name + " (" + role + ")";

    if (role === "buyer") showView("buyer-view");
    if (role === "supplier") showView("supplier-view");
    if (role === "admin") showView("admin-view");

    updateAdminStats();
    loadBuyerRequests();
    loadSupplierRequests();
}

function createRequest() {
    const item = document.getElementById("req-item").value.trim();
    const qty = document.getElementById("req-qty").value;
    const desc = document.getElementById("req-desc").value.trim();

    if (!item || !qty) return;

    requests.push({
        id: Date.now(),
        buyer: currentUser.name,
        item,
        qty,
        desc,
        bids: []
    });

    loadBuyerRequests();
    loadSupplierRequests();
    updateAdminStats();
}

function loadBuyerRequests() {
    const box = document.getElementById("buyer-requests");
    box.innerHTML = "";

    const myReqs = requests.filter(r => r.buyer === currentUser?.name);

    myReqs.forEach(r => {
        const div = document.createElement("div");
        div.className = "request-box";
        div.innerHTML = `
            <strong>${r.item}</strong> (Qty: ${r.qty})<br>
            ${r.desc}<br><br>
            <strong>Bids:</strong><br>
            ${r.bids.map(b => b.supplier + ": $" + b.amount).join("<br>") || "No bids yet"}
        `;
        box.appendChild(div);
    });
}

function loadSupplierRequests() {
    const box = document.getElementById("supplier-requests");
    box.innerHTML = "";

    if (requests.length === 0) {
        box.textContent = "No open requests yet. When a buyer submits a request, it will show up here.";
        return;
    }

    requests.forEach(r => {
        const div = document.createElement("div");
        div.className = "request-box";
        div.innerHTML = `
            <strong>${r.item}</strong> (Qty: ${r.qty})<br>
            ${r.desc}<br>
            Buyer: ${r.buyer}<br><br>
            <input placeholder="Bid amount" id="bid-${r.id}" />
            <button onclick="placeBid(${r.id})">Submit Bid</button>
        `;
        box.appendChild(div);
    });
}

function placeBid(id) {
    const req = requests.find(r => r.id === id);
    const amount = document.getElementById("bid-" + id).value;

    if (!amount) return;

    req.bids.push({
        supplier: currentUser.name,
        amount
    });

    loadSupplierRequests();
    loadBuyerRequests();
}

function updateAdminStats() {
    document.getElementById("admin-user-count").textContent = users.length;
    document.getElementById("admin-request-count").textContent = requests.length;
}

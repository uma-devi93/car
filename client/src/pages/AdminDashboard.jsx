import React, { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("cars");

  // ---------------- CAR DATA ----------------
  const [cars, setCars] = useState([
    { id: 1, name: "Honda City", price: 1200, image: "https://stimg.cardekho.com/images/car-images/930x620/Honda/City/9710/1677754515528/222_Platinum-White-Pearl_b8b8c0.jpg?imwidth=420&impolicy=resize" },
    { id: 2, name: "Swift Dzire", price: 1000, image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift-Dzire/7664/1675859508504/front-left-side-47.jpg?imwidth=420&impolicy=resize" },
  ]);
  const [newCar, setNewCar] = useState({ name: "", image: "", price: "" });
  const [editingCar, setEditingCar] = useState(null);

  const addCar = () => {
    if (!newCar.name || !newCar.image || !newCar.price) return alert("Fill all fields");
    setCars([...cars, { id: Date.now(), ...newCar }]);
    setNewCar({ name: "", image: "", price: "" });
  };
  const deleteCar = (id) => setCars(cars.filter((c) => c.id !== id));
  const saveEditedCar = () => {
    setCars(cars.map((c) => (c.id === editingCar.id ? editingCar : c)));
    setEditingCar(null);
  };

  // ---------------- CUSTOMER DATA ----------------
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ramesh", email: "ramesh@gmail.com", mobile: "9990001111" },
    { id: 2, name: "Suresh", email: "suresh@gmail.com", mobile: "9990002222" },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", mobile: "" });
  const [editingCustomer, setEditingCustomer] = useState(null);

  const addCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.mobile) return alert("Fill all fields");
    setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
    setNewCustomer({ name: "", email: "", mobile: "" });
  };
  const deleteCustomer = (id) => setCustomers(customers.filter((c) => c.id !== id));
  const saveEditedCustomer = () => {
    setCustomers(customers.map((c) => (c.id === editingCustomer.id ? editingCustomer : c)));
    setEditingCustomer(null);
  };

  // ---------------- BOOKINGS DATA ----------------
  const [bookings, setBookings] = useState([
    { id: 1, car: "Honda City", customer: "Ramesh", date: "2025-01-10", status: "Pending" },
    { id: 2, car: "Swift Dzire", customer: "Suresh", date: "2025-01-12", status: "Pending" },
  ]);
  const [newBooking, setNewBooking] = useState({ car: "", customer: "", date: "", status: "Pending" });
  const [editingBooking, setEditingBooking] = useState(null);

  const addBooking = () => {
    if (!newBooking.car || !newBooking.customer || !newBooking.date) return alert("Fill all fields");
    setBookings([...bookings, { id: Date.now(), ...newBooking }]);
    setNewBooking({ car: "", customer: "", date: "", status: "Pending" });
  };
  const deleteBooking = (id) => setBookings(bookings.filter((b) => b.id !== id));
  const saveEditedBooking = () => {
    setBookings(bookings.map((b) => (b.id === editingBooking.id ? editingBooking : b)));
    setEditingBooking(null);
  };

  // ---------------- PAYMENTS DATA ----------------
  const [payments, setPayments] = useState([
    { id: 1, customer: "Ramesh", mobile: "9990001111", amount: 1500, status: "Complete" },
    { id: 2, customer: "Suresh", mobile: "9990002222", amount: 1200, status: "Pending" },
  ]);
  const [newPayment, setNewPayment] = useState({ customer: "", mobile: "", amount: "", status: "Pending" });
  const [editingPayment, setEditingPayment] = useState(null);

  const addPayment = () => {
    if (!newPayment.customer || !newPayment.mobile || !newPayment.amount) return alert("Fill all fields");
    setPayments([...payments, { id: Date.now(), ...newPayment }]);
    setNewPayment({ customer: "", mobile: "", amount: "", status: "Pending" });
  };
  const deletePayment = (id) => setPayments(payments.filter((p) => p.id !== id));
  const saveEditedPayment = () => {
    setPayments(payments.map((p) => (p.id === editingPayment.id ? editingPayment : p)));
    setEditingPayment(null);
  };

  return (
    <div className="dashboard-container">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li onClick={() => setActiveTab("cars")} className={activeTab === "cars" ? "active" : ""}>Cars</li>
          <li onClick={() => setActiveTab("customers")} className={activeTab === "customers" ? "active" : ""}>Customer Details</li>
          <li onClick={() => setActiveTab("bookings")} className={activeTab === "bookings" ? "active" : ""}>Booking Tracking</li>
          <li onClick={() => setActiveTab("payments")} className={activeTab === "payments" ? "active" : ""}>Payment Tracking</li>
          <li onClick={() => window.location.href = "/admin/login"}>Logout</li>
        </ul>
      </aside>

      {/* ---------------- CONTENT ---------------- */}
      <main className="content">

        {/* ---------------- CARS ---------------- */}
        {activeTab === "cars" && (
          <div>
            <h1>Car Management</h1>
            <div className="add-car">
              <input type="text" placeholder="Car Name" value={newCar.name} onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}/>
              <input type="text" placeholder="Image URL" value={newCar.image} onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}/>
              <input type="number" placeholder="Car Price" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}/>
              <button onClick={addCar}>Add Car</button>
            </div>

            <div className="car-list">
              {cars.map((car) => (
                <div key={car.id} className="car-card">
                  <img src={car.image} alt={car.name} />
                  <h3>{car.name}</h3>
                  <p><b>₹ {car.price}</b></p>
                  <button onClick={() => setEditingCar(car)}>Edit</button>
                  <button onClick={() => deleteCar(car.id)}>Delete</button>
                </div>
              ))}
            </div>

            {editingCar && (
              <div className="edit-modal">
                <div className="edit-box">
                  <h2>Edit Car</h2>
                  <input type="text" value={editingCar.name} onChange={(e) => setEditingCar({ ...editingCar, name: e.target.value })}/>
                  <input type="text" value={editingCar.image} onChange={(e) => setEditingCar({ ...editingCar, image: e.target.value })}/>
                  <input type="number" value={editingCar.price} onChange={(e) => setEditingCar({ ...editingCar, price: e.target.value })}/>
                  <button onClick={saveEditedCar}>Save</button>
                  <button onClick={() => setEditingCar(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- CUSTOMERS ---------------- */}
        {activeTab === "customers" && (
          <div>
            <h1>Customer Details</h1>
            <div className="add-car">
              <input type="text" placeholder="Customer Name" value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}/>
              <input type="email" placeholder="Email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}/>
              <input type="text" placeholder="Mobile" value={newCustomer.mobile} onChange={(e) => setNewCustomer({ ...newCustomer, mobile: e.target.value })}/>
              <button onClick={addCustomer}>Add</button>
            </div>

            <table className="data-table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Action</th></tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.mobile}</td>
                    <td>
                      <button onClick={() => setEditingCustomer(c)}>Edit</button>
                      <button onClick={() => deleteCustomer(c.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {editingCustomer && (
              <div className="edit-modal">
                <div className="edit-box">
                  <h2>Edit Customer</h2>
                  <input type="text" value={editingCustomer.name} onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}/>
                  <input type="email" value={editingCustomer.email} onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}/>
                  <input type="text" value={editingCustomer.mobile} onChange={(e) => setEditingCustomer({ ...editingCustomer, mobile: e.target.value })}/>
                  <button onClick={saveEditedCustomer}>Save</button>
                  <button onClick={() => setEditingCustomer(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- BOOKINGS ---------------- */}
        {activeTab === "bookings" && (
          <div>
            <h1>Booking Tracking</h1>
            <div className="add-booking">
              <input type="text" placeholder="Car Name" value={newBooking.car} onChange={(e) => setNewBooking({ ...newBooking, car: e.target.value })}/>
              <input type="text" placeholder="Customer Name" value={newBooking.customer} onChange={(e) => setNewBooking({ ...newBooking, customer: e.target.value })}/>
              <input type="date" value={newBooking.date} onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}/>
              <select value={newBooking.status} onChange={(e) => setNewBooking({ ...newBooking, status: e.target.value })}>
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
              <button onClick={addBooking}>Add Booking</button>
            </div>

            <table className="data-table">
              <thead>
                <tr><th>ID</th><th>Car</th><th>Customer</th><th>Date</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.car}</td>
                    <td>{b.customer}</td>
                    <td>{b.date}</td>
                    <td style={{color: b.status==="Pending"?"orange":"green"}}>{b.status}</td>
                    <td>
                      <button onClick={() => setEditingBooking(b)}>Edit</button>
                      <button onClick={() => deleteBooking(b.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {editingBooking && (
              <div className="edit-modal">
                <div className="edit-box">
                  <h2>Edit Booking</h2>
                  <input type="text" value={editingBooking.car} onChange={(e) => setEditingBooking({ ...editingBooking, car: e.target.value })}/>
                  <input type="text" value={editingBooking.customer} onChange={(e) => setEditingBooking({ ...editingBooking, customer: e.target.value })}/>
                  <input type="date" value={editingBooking.date} onChange={(e) => setEditingBooking({ ...editingBooking, date: e.target.value })}/>
                  <select value={editingBooking.status} onChange={(e) => setEditingBooking({ ...editingBooking, status: e.target.value })}>
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                  </select>
                  <button onClick={saveEditedBooking}>Save</button>
                  <button onClick={() => setEditingBooking(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- PAYMENTS ---------------- */}
        {activeTab === "payments" && (
          <div>
            <h1>Payment Tracking</h1>
            <div className="add-payment">
              <input type="text" placeholder="Customer Name" value={newPayment.customer} onChange={(e) => setNewPayment({ ...newPayment, customer: e.target.value })}/>
              <input type="text" placeholder="Mobile" value={newPayment.mobile} onChange={(e) => setNewPayment({ ...newPayment, mobile: e.target.value })}/>
              <input type="number" placeholder="Amount" value={newPayment.amount} onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}/>
              <select value={newPayment.status} onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}>
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
              <button onClick={addPayment}>Add Payment</button>
            </div>

            <table className="data-table">
              <thead>
                <tr><th>ID</th><th>Customer</th><th>Mobile</th><th>Amount</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.customer}</td>
                    <td>{p.mobile}</td>
                    <td>₹ {p.amount}</td>
                    <td style={{color: p.status==="Pending"?"orange":"green"}}>{p.status}</td>
                    <td>
                      <button onClick={() => setEditingPayment(p)}>Edit</button>
                      <button onClick={() => deletePayment(p.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {editingPayment && (
              <div className="edit-modal">
                <div className="edit-box">
                  <h2>Edit Payment</h2>
                  <input type="text" value={editingPayment.customer} onChange={(e) => setEditingPayment({ ...editingPayment, customer: e.target.value })}/>
                  <input type="text" value={editingPayment.mobile} onChange={(e) => setEditingPayment({ ...editingPayment, mobile: e.target.value })}/>
                  <input type="number" value={editingPayment.amount} onChange={(e) => setEditingPayment({ ...editingPayment, amount: e.target.value })}/>
                  <select value={editingPayment.status} onChange={(e) => setEditingPayment({ ...editingPayment, status: e.target.value })}>
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                  </select>
                  <button onClick={saveEditedPayment}>Save</button>
                  <button onClick={() => setEditingPayment(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}


/* ---------------- CSS ---------------- */
const styles = `
.dashboard-container {
  display: flex;
  height: 100vh;
  background: #93a4e5ff;
}
.sidebar {
  width: 250px;
  background: #222;
  color: white;
  padding: 20px;
}
.sidebar h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 10px;
}
.sidebar li:hover, .sidebar .active {
  background: #444;
}
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.car-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.car-card {
  background: white;
  padding: 15px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.car-card img {
  width: 100%;
  border-radius: 10px;
}
.add-car input {
  padding: 10px;
  margin-right: 10px;
}
.add-car button {
  padding: 10px 15px;
  background: #007bff;
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 6px;
}
button[onclick*="Edit"] {
  background: #28a745;
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  color: red;
  cursor: pointer;
  border-radius: 4px;
}
button[onclick*="Delete"] {
  background: #dc3545;
  padding: 8px 12px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  margin-top: 20px;
}
.data-table th, .data-table td {
  padding: 12px;
  border: 1px solid #1765caff;
  text-align: left;
}
.data-table th {
  background: #e08787ff;
}
`;



if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}


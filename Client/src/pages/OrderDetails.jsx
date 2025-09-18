import React from 'react';
import { useNavigate } from 'react-router-dom'; // For logout functionality etc.
import './OrderDetails.css'; // Don't forget to create this CSS file!

// Import your product images for the order items
import lemon from '../assets/lemon.jpg';
import mango from '../assets/mango.jpg';
import pineapple from '../assets/pineapple.jpg';
import kokum from '../assets/kokum.jpg';

function OrderDetails() {
  const navigate = useNavigate();

  // --- Mock Order Data (Replace with real data from your backend/context) ---
  const mockOrder = {
    orderId: 'NK20250730-001',
    orderDate: 'July 30, 2025',
    orderStatus: 'Delivered', // Can be 'Processing', 'Shipped', 'Delivered', 'Cancelled'
    deliveryDate: 'August 05, 2025',

    customerInfo: {
      name: 'Priyansh Sharma',
      email: 'priyansh.sharma@example.com',
      phone: '+91 98765 43210',
    },
    shippingAddress: {
      street: '123, Green Meadows Apt.',
      city: 'Mumbai',
      state: 'Maharashtra',
      zip: '400001',
      country: 'India',
    },
    paymentInfo: {
      method: 'Online Payment (UPI)',
      status: 'Paid',
      transactionId: 'UPI1234567890',
    },
    
    items: [
      { id: 101, name: 'Lemon Magic Beverage', image: lemon, quantity: 2, unitPrice: 100 },
      { id: 102, name: 'Mango Magic Beverage', image: mango, quantity: 1, unitPrice: 150 },
      { id: 103, name: 'Pineapple Magic Beverage', image: pineapple, quantity: 3, unitPrice: 140 },
      { id: 104, name: 'Kokum Magic Beverage', image: kokum, quantity: 1, unitPrice: 130 },
    ],
    
    subtotal: 100 * 2 + 150 * 1 + 140 * 3 + 130 * 1, // Calculated from items
    shippingCost: 50, // Example shipping
    tax: 65, // Example tax
  };

  mockOrder.totalAmount = mockOrder.subtotal + mockOrder.shippingCost + mockOrder.tax;
  // --- End Mock Order Data ---

  const handleTrackOrder = () => {
    alert(`Tracking order ${mockOrder.orderId}. (Link to tracking page/service)`);
    // navigate('/track-order/' + mockOrder.orderId);
  };

  const handleDownloadInvoice = () => {
    alert(`Downloading invoice for order ${mockOrder.orderId}. (Generate PDF/File)`);
    // Logic to generate and download invoice
  };

  return (
    <div className="order-details-wrapper">
      <div className="order-details-container container">
        <div className="order-header">
          <h1 className="order-id">Order ID: #{mockOrder.orderId}</h1>
          <p className="order-meta">
            Ordered on: <span>{mockOrder.orderDate}</span> | Status: <span className={`order-status ${mockOrder.orderStatus.toLowerCase()}`}>{mockOrder.orderStatus}</span>
          </p>
          {mockOrder.orderStatus === 'Shipped' && (
            <button className="track-order-btn" onClick={handleTrackOrder}>Track Order</button>
          )}
        </div>

        <div className="order-sections-grid">
          {/* Customer Information */}
          <div className="section-card customer-info">
            <h2 className="section-title">Customer Information</h2>
            <p><strong>Name:</strong> {mockOrder.customerInfo.name}</p>
            <p><strong>Email:</strong> {mockOrder.customerInfo.email}</p>
            <p><strong>Phone:</strong> {mockOrder.customerInfo.phone}</p>
          </div>

          {/* Shipping Address */}
          <div className="section-card shipping-address">
            <h2 className="section-title">Shipping Address</h2>
            <p>{mockOrder.shippingAddress.street}</p>
            <p>{mockOrder.shippingAddress.city}, {mockOrder.shippingAddress.state} - {mockOrder.shippingAddress.zip}</p>
            <p>{mockOrder.shippingAddress.country}</p>
            {mockOrder.orderStatus === 'Delivered' && (
              <p className="delivery-info">Delivered on: {mockOrder.deliveryDate}</p>
            )}
          </div>

          {/* Payment Information */}
          <div className="section-card payment-info">
            <h2 className="section-title">Payment Information</h2>
            <p><strong>Method:</strong> {mockOrder.paymentInfo.method}</p>
            <p><strong>Status:</strong> <span className={`payment-status ${mockOrder.paymentInfo.status.toLowerCase()}`}>{mockOrder.paymentInfo.status}</span></p>
            <p><strong>Transaction ID:</strong> {mockOrder.paymentInfo.transactionId}</p>
            <button className="download-invoice-btn" onClick={handleDownloadInvoice}>Download Invoice</button>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="section-card ordered-items-card">
          <h2 className="section-title">Ordered Items</h2>
          <div className="order-items-table">
            <div className="table-header">
              <span className="item-col product-col">Product</span>
              <span className="item-col price-col">Unit Price</span>
              <span className="item-col qty-col">Quantity</span>
              <span className="item-col total-col">Total</span>
            </div>
            {mockOrder.items.map(item => (
              <div key={item.id} className="table-row">
                <div className="product-cell">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span className="product-name">{item.name}</span>
                </div>
                <span className="price-cell">₹{item.unitPrice.toFixed(2)}</span>
                <span className="qty-cell">{item.quantity}</span>
                <span className="total-cell">₹{(item.unitPrice * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Totals */}
        <div className="order-summary-totals section-card">
          <h2 className="section-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{mockOrder.subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>₹{mockOrder.shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>₹{mockOrder.tax.toFixed(2)}</span>
          </div>
          <div className="summary-total-row">
            <span>Grand Total:</span>
            <span>₹{mockOrder.totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="order-actions-bottom">
          <button className="reorder-btn">Reorder</button>
          <button className="contact-support-btn">Contact Support</button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
# MedBid
MedBid is a small prototype for a reverse-auction marketplace for hospital supplies. The project includes basic buyer, supplier, and admin views, with simple request and bidding workflows used for the course demonstration.

MedBid — Reverse-Auction Marketplace for Hospital Supplies

MedBid is a small front-end prototype built for the CEN4010 Software Engineering course. The idea is to simulate how a reverse-auction system could work for hospital supply purchasing. Buyers can post supply requests, suppliers can submit bids, and an admin can view system activity. This project was developed as a team assignment and is intended for demonstration purposes only.

Features:

User Login:

    Simple login with name and role

    Supports Buyer, Supplier, and Admin user types

Buyer View:

    Create new supply requests (item, quantity, description)

    View your own requests

    See incoming bids from suppliers

Supplier View:

    See all open buyer requests

    Submit a bid amount for each request

    View updated bid lists

Admin Dashboard:

    See total number of users

    View number of created requests

    Check basic activity stats during the demo

How to Run:

    Download or clone the repository

    Open the project folder

    Double-click index.html to open it in a browser (Chrome, Firefox, Edge, etc.)

    No server or installation required

Project Structure:

MedBid/

    index.html        # main UI
    style.css         # page styling
    script.js         # functionality (requests, bids, admin stats)
    MBicon.png        # logo / favicon

Team Members:

    Eduardo Boulocq

    Edna

    Jeremiah

    Tasfique
    
    Aitur

Notes:

This is only a prototype for the semester project demo

All data is stored temporarily in memory (no database)

The design is intentionally simple for demonstration purposes

Future Improvements (if needed):

    Persistent database for real request history

    Authentication system

    Filtering and sorting requests

    Email notifications for bids
    
    More detailed admin tools

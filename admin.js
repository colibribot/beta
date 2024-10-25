<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Admin Panel</title>
    <script src="beta/assets/scripts/scripts.js"></script><style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            display: flex;
            min-height: 100vh;
            background-color: #181818;
            color: #fff;
        }

        /* Sidebar */
        .sidebar {
            width: 250px;
            background-color: #202020;
            padding: 20px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: fixed;
        }
        
        .sidebar .logo {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #1a73e8;
        }
        
        .sidebar ul {
            list-style: none;
            margin-top: 40px;
        }
        
        .sidebar ul li {
            margin: 20px 0;
        }
        
        .sidebar ul li a {
            color: #c4c4c4;
            text-decoration: none;
            font-size: 16px;
            display: flex;
            align-items: center;
        }
        
        .sidebar ul li a:hover {
            color: #1a73e8;
        }

        .sidebar ul li a i {
            margin-right: 10px;
        }

        /* Main content */
        .main-content {
            margin-left: 250px;
            padding: 30px;
            width: 100%;
        }
        
        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2a2a2a;
            padding: 10px 20px;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        
        .topbar h2 {
            font-size: 24px;
        }
        
        .topbar .user {
            display: flex;
            align-items: center;
        }

        .topbar .user img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        /* Cards Grid */
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .card {
            background-color: #2a2a2a;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .card h3 {
            margin-bottom: 10px;
            font-size: 20px;
        }
        
        .card p {
            font-size: 16px;
            color: #c4c4c4;
        }

        /* Latency Section */
        .latency-section {
            background-color: #2a2a2a;
            border-radius: 10px;
            padding: 20px;
            margin-top: 30px;
        }

        .latency-section .latency-title {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .latency-table {
            width: 100%;
            border-collapse: collapse;
        }

        .latency-table th, 
        .latency-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #444;
        }

        .latency-table th {
            background-color: #1a1a1a;
            color: #fff;
        }

        .latency-table tr:hover {
            background-color: #333;
        }

        .latency-table td {
            color: #c4c4c4;
        }

        /* Footer */
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 14px;
            color: #888;
        }
    .profile {
    position: relative;
    display: flex;
    align-items: center;
}

.profile-trigger {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 30px; /* Extend the trigger area to the left */
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -10px; /* Move the profile picture more to the left */
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #343a40;
    color: #ffffff;
    min-width: 125px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
}

.dropdown-content p, .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    color: #ffffff; /* Ensure dropdown links are white */
}

.dropdown-content a:hover {
    background-color: #575757;
}

/* Hamburger Menu Styles */


@media (max-width: 768px) {
    .header-container.flex {
        flex-direction: column;
        align-items: center;
    }



    .btn-primary {
        margin-top: 20px; /* Adjust top margin of login button */
    }



    .profile-trigger {
        padding-left: 10px; /* Adjust profile trigger padding */
    }

    .dropdown-content {
        top: 70px; /* Increase the distance from top for dropdown content */
    }
}</style>
</head>
<body>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="logo">
            Admin Panel
        </div>
        <ul>
            <li><a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li><a href="#"><i class="fas fa-cogs"></i> Settings</a></li>
            <li><a href="#"><i class="fas fa-users"></i> Users</a></li>
            <li><a href="#"><i class="fas fa-chart-line"></i> Analytics</a></li>
            <li><a href="#"><i class="fas fa-life-ring"></i> Support</a></li>
        </ul>
        <div class="footer">
            <p>© 2024 Circuit. All Rights Reserved.</p>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
            <div class="profile">
                <div class="profile-trigger">
                    <img id="profile-pic" src="" alt="Profile Picture" class="profile-pic" style="display: block;">
                </div>
                <div id="dropdown-content" class="dropdown-content" style="display: none;">
                    <p id="profile-name">alex1061</p>
                    <a href="dashboard.html">Dashboard</a>
                    <a href="premium.html">Premium</a>
                    <a href="#" id="logout-btn">Log Out</a>
                    <a href="#" id="theme-toggle">Dark/Light mode</a>
                </div>
            </div>
        </div>

        <!-- Cards Section -->
        <div class="cards">
            <div class="card">
                <h3>Total Users</h3>
                <p>3498</p>
            </div>
            <div class="card">
                <h3>Guilds</h3>
                <p>37</p>
            </div>
            <div class="card">
                <h3>Bot latency</h3>
                <p>27ms</p>
            </div>
            <div class="card">
                <h3>Uptime</h3>
                <p> 0d 4h 31m 12s</p>
            </div>
            <div class="card">
                <h3>Clusters</h3>
                <p>8 Clusters</p>
            </div>
            <div class="card">
                <h3>Shards</h3>
                <p>24 Shards</p>
            </div>
        <div class="card">
                <h3>Database connection</h3>
                <p>Connected</p>
            </div><div class="card">
                <h3>Version</h3>
                <p>1.5.5</p>
            </div></div>

        <!-- Latency Section -->
        
    </div>
    


</body></html>

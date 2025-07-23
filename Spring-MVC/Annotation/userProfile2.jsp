<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>User Profile</title>
</head>
<body>
    <h1>User Profile</h1>
 
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <h2>${message}</h2>
</body>
</html>
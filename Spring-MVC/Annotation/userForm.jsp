<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>User Form</title>
</head>
<body>
    <h1>Create User</h1>
    <form action="submit" method="post">
        Name: <input type="text" name="name" /><br/>
        Email: <input type="text" name="email" /><br/>
        <input type="submit" value="Submit"/>
    </form>
</body>
</html>

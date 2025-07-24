<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<html>
<head>
    <style>
        .error {
            color: red;
            font-size: small;
        }
    </style>
</head>
<body bgcolor="lavender">
    <h1>Cab Rent Estimator</h1>
    <form:form modelAttribute="cab" action="estimatorDesk" method="post">
        <label for="cabType">Select Cab Type:</label>
        <form:select path="cabType" id="cabType">
            <form:options items="${cabList}" />
        </form:select>
        <br><br>

        <label for="durationInHrs">Duration in Hours:</label>
        <form:input path="durationInHrs" id="durationInHrs" />
        <form:errors path="durationInHrs" cssClass="error" />
        <br><br>

        <input type="submit" value="Estimate Cab Rent">
    </form:form>
</body>
</html>

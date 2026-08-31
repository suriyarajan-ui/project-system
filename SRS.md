User registration and login.
Complaint submission.
View submitted complaints.
Search complaints by complaint ID.
Admin complaint management and status updates.
Admin dashboard with complaint statistics.

Purpose

The purpose of the Management System is to provide a system for users to register and log in, submit complaints, view submitted complaints, and search for complaints using a complaint ID. It also provides administrators with complaint management, status updates, and a dashboard showing complaint statistics.

In Scope

The first version will include:

User registration and login.
Complaint submission.
Viewing submitted complaints.
Searching complaints by complaint ID.
Admin complaint management and status updates.
Admin dashboard with complaint statistics.
Out of Scope

The first version will not include:

Features not listed in the approved requirements.
Additional user functions.
Additional complaint functions.
Additional administrator functions.
Notifications or other communication features.

Functional Requirements

FR-01: The system shall allow users to register an account and log in.

FR-02: The system shall allow users to submit complaints.

FR-03: The system shall allow users to view their submitted complaints.

FR-04: The system shall allow users to search for complaints using a complaint ID.

FR-05: The system shall allow administrators to manage complaints and update their status.

FR-06: The system shall provide administrators with a dashboard displaying complaint statistics.

Non-Functional Requirements
Speed

NFR-01: The system shall load each requested page within 3 seconds under normal operating conditions.

NFR-02: The system shall return complaint search results within 3 seconds after a search request.

Security

NFR-03: The system shall allow access to administrator functions only after 1 successful administrator login.

NFR-04: The system shall prevent unauthorized access to administrator functions with 0 unauthorized access attempts resulting in access.

Usability

NFR-05: The system shall allow a user to complete the complaint submission process within 5 minutes under normal conditions.

NFR-06: The system shall display an error message for invalid or missing input within 3 seconds.

Reliability

NFR-07: The system shall maintain complaint data with 0 unintended data losses during normal operation.

NFR-08: The system shall preserve 100% of successfully submitted complaints after the system is restarted.

Assumptions
Users have access to a device capable of running the Python application.
Users provide valid information when registering and submitting complaints.
Users have the required login credentials to access the system.
Administrators are authorized to manage complaints.
Python is installed and available in the application environment.
The SQLite database is available and accessible to the Python application.
The system will be used for a small number of users and complaints.
5. Constraints
The system shall be developed using Python.
SQLite shall be used as the database.
The system shall be limited to the six features defined in the requirements.
The system is intended for a small-scale college project.
SQLite limits the system's suitability for large numbers of simultaneous users.
The system depends on the local environment being available to run the Python application and SQLite database.
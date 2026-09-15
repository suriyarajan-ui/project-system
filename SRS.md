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


ID	User Story
US-01	As a user, I want to register an account and log in, so that I can access the complaint management system.
US-02	As a user, I want to submit complaints, so that I can report my complaints through the system.
US-03	As a user, I want to view my submitted complaints, so that I can see the complaints I have submitted.
US-04	As a user, I want to search for complaints using a complaint ID, so that I can find a specific complaint.
US-05	As an administrator, I want to manage complaints and update their status, so that I can manage the complaints submitted to the system.
US-06	As an administrator, I want to view complaint statistics on a dashboard, so that I can see complaint statistics.

| Field                | Details                                                                                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | UC-01                                                                                                                                                                                                                                                                       |
| **Name**             | User Registration and Login                                                                                                                                                                                                                                                 |
| **Actor**            | User                                                                                                                                                                                                                                                                        |
| **Goal**             | To register an account and log in to access the complaint management system.                                                                                                                                                                                                |
| **Pre-condition**    | The user has access to the system.                                                                                                                                                                                                                                          |
| **Main Flow**        | 1. User selects registration/login. <br> 2. User provides the required registration or login information. <br> 3. System processes the information. <br> 4. System registers the account or logs the user in. <br> 5. User gains access to the complaint management system. |
| **Alternative Flow** | 1. User chooses either account registration or login as required. <br> 2. System performs the selected operation.                                                                                                                                                           |
| **Exception Flow**   | 1. User provides invalid or missing information. <br> 2. System displays an error message. <br> 3. User can provide the information again.                                                                                                                                  |
| **Post-condition**   | The user has successfully registered an account or is logged in to the system.                                                                                                                                                                                              |
| Field                | Details                                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | UC-02                                                                                                                                                                                                                       |
| **Name**             | Submit Complaint                                                                                                                                                                                                            |
| **Actor**            | User                                                                                                                                                                                                                        |
| **Goal**             | To submit a complaint through the system.                                                                                                                                                                                   |
| **Pre-condition**    | The user is logged in to the system.                                                                                                                                                                                        |
| **Main Flow**        | 1. User selects the complaint submission option. <br> 2. User enters the complaint information. <br> 3. User submits the complaint. <br> 4. System processes the complaint. <br> 5. System records the submitted complaint. |
| **Alternative Flow** | 1. User enters the required complaint information. <br> 2. User submits the complaint.                                                                                                                                      |
| **Exception Flow**   | 1. Complaint information is invalid or missing. <br> 2. System displays an error message. <br> 3. User corrects or provides the required information.                                                                       |
| **Post-condition**   | The complaint is successfully submitted and recorded in the system.                                                                                                                                                         |
| Field                | Details                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | UC-03                                                                                                                                                                                                   |
| **Name**             | View Submitted Complaints                                                                                                                                                                               |
| **Actor**            | User                                                                                                                                                                                                    |
| **Goal**             | To view complaints submitted by the user.                                                                                                                                                               |
| **Pre-condition**    | The user is logged in to the system and has submitted complaints.                                                                                                                                       |
| **Main Flow**        | 1. User selects the option to view submitted complaints. <br> 2. System retrieves the user's submitted complaints. <br> 3. System displays the submitted complaints. <br> 4. User views the complaints. |
| **Alternative Flow** | 1. User selects the view complaints option. <br> 2. System retrieves the available submitted complaints. <br> 3. System displays the complaints.                                                        |
| **Exception Flow**   | 1. The system cannot retrieve the submitted complaints. <br> 2. System displays an error message.                                                                                                       |
| **Post-condition**   | The user's submitted complaints are displayed.                                                                                                                                                          |
| Field                | Details                                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | UC-04                                                                                                                                                                                               |
| **Name**             | Search Complaint by ID                                                                                                                                                                              |
| **Actor**            | User                                                                                                                                                                                                |
| **Goal**             | To find a specific complaint using its complaint ID.                                                                                                                                                |
| **Pre-condition**    | The user has access to the system and a complaint ID is available.                                                                                                                                  |
| **Main Flow**        | 1. User selects the complaint search option. <br> 2. User enters the complaint ID. <br> 3. System searches for the complaint using the provided ID. <br> 4. System displays the matching complaint. |
| **Alternative Flow** | 1. User enters a different complaint ID. <br> 2. System searches using the entered ID. <br> 3. System displays the matching complaint if found.                                                     |
| **Exception Flow**   | 1. The entered complaint ID does not match a complaint. <br> 2. System indicates that the complaint could not be found.                                                                             |
| **Post-condition**   | The requested complaint is displayed if a matching complaint ID is found.                                                                                                                           |
| Field                | Details                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**               | UC-05                                                                                                                                                                                                                                                                                                            |
| **Name**             | Admin Complaint Management and Status Update                                                                                                                                                                                                                                                                     |
| **Actor**            | Administrator                                                                                                                                                                                                                                                                                                    |
| **Goal**             | To manage complaints and update their status.                                                                                                                                                                                                                                                                    |
| **Pre-condition**    | The administrator has successfully logged in and is authorized to manage complaints.                                                                                                                                                                                                                             |
| **Main Flow**        | 1. Administrator accesses complaint management. <br> 2. System displays the complaints available for management. <br> 3. Administrator selects a complaint. <br> 4. Administrator manages the selected complaint. <br> 5. Administrator updates the complaint status. <br> 6. System records the updated status. |
| **Alternative Flow** | 1. Administrator selects another complaint. <br> 2. Administrator manages the selected complaint. <br> 3. Administrator updates its status.                                                                                                                                                                      |
| **Exception Flow**   | 1. Unauthorized access to administrator functions is attempted. <br> 2. System prevents access to administrator functions.                                                                                                                                                                                       |
| **Post-condition**   | The complaint has been managed and its updated status is recorded in the system.                                                                                                                                                                                                                                 |

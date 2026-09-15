/* =========================================
   COMPLAINT MANAGEMENT SYSTEM
   JAVASCRIPT
========================================= */


/* =========================================
   MOCK COMPLAINT DATA
========================================= */

const complaints = [
    {
        id: "CMP-1001",
        subject: "Classroom maintenance",
        category: "Facilities",
        status: "Pending"
    },

    {
        id: "CMP-1002",
        subject: "Library facility issue",
        category: "Library",
        status: "In Progress"
    },

    {
        id: "CMP-1003",
        subject: "Laboratory equipment issue",
        category: "Laboratory",
        status: "Resolved"
    },

    {
        id: "CMP-1004",
        subject: "Classroom maintenance",
        category: "Facilities",
        status: "Pending"
    }
];


/* =========================================
   GET HTML ELEMENTS
========================================= */

const navItems =
    document.querySelectorAll(".nav-item");

const sections =
    document.querySelectorAll(".page-section");

const breadcrumbTitle =
    document.getElementById("breadcrumbTitle");

const sidebar =
    document.getElementById("sidebar");

const mobileMenu =
    document.getElementById("mobileMenu");

const toast =
    document.getElementById("toast");


/* =========================================
   PAGE TITLES
========================================= */

const sectionTitles = {

    auth: "Registration & Login",

    submit: "Submit Complaint",

    "my-complaints":
        "My Complaints",

    search:
        "Search by Complaint ID",

    "admin-management":
        "Complaint Management",

    "admin-dashboard":
        "Complaint Statistics"
};


/* =========================================
   NAVIGATION
========================================= */

function showSection(sectionId) {

    /* Show selected section */

    sections.forEach(section => {

        if (section.id === sectionId) {

            section.classList.add("active");

        } else {

            section.classList.remove("active");

        }

    });


    /* Highlight selected menu */

    navItems.forEach(item => {

        if (item.dataset.section === sectionId) {

            item.classList.add("active");

        } else {

            item.classList.remove("active");

        }

    });


    /* Update breadcrumb */

    breadcrumbTitle.textContent =
        sectionTitles[sectionId];


    /* Close mobile menu */

    sidebar.classList.remove("open");


    /* Update dashboard */

    if (sectionId === "admin-dashboard") {

        updateDashboard();

    }

}


/* =========================================
   NAVIGATION CLICK
========================================= */

navItems.forEach(item => {

    item.addEventListener("click", function () {

        const sectionId =
            this.dataset.section;

        showSection(sectionId);

    });

});


/* =========================================
   MOBILE MENU
========================================= */

mobileMenu.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle("open");

    }
);


/* =========================================
   STATUS CLASS
========================================= */

function getStatusClass(status) {

    if (status === "Pending") {

        return "pending";

    }

    if (status === "In Progress") {

        return "progress";

    }

    if (status === "Resolved") {

        return "resolved";

    }

    return "";

}


/* =========================================
   DISPLAY MY COMPLAINTS
========================================= */

function renderMyComplaints() {

    const table =
        document.getElementById(
            "myComplaintsTable"
        );


    if (!table) {
        return;
    }


    table.innerHTML = "";


    complaints.forEach(complaint => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>
                    ${complaint.id}
                </strong>
            </td>

            <td>
                ${complaint.subject}
            </td>

            <td>
                ${complaint.category}
            </td>

            <td>

                <span class="status ${getStatusClass(
                    complaint.status
                )}">

                    ${complaint.status}

                </span>

            </td>

        `;


        table.appendChild(row);

    });

}


/* =========================================
   ADMIN COMPLAINT TABLE
========================================= */

function renderAdminComplaints(filter = "") {

    const table =
        document.getElementById(
            "adminComplaintsTable"
        );


    if (!table) {
        return;
    }


    const searchText =
        filter
            .trim()
            .toLowerCase();


    const filteredComplaints =
        complaints.filter(
            complaint =>
                complaint.id
                    .toLowerCase()
                    .includes(searchText)
        );


    table.innerHTML = "";


    /* No complaint */

    if (filteredComplaints.length === 0) {

        table.innerHTML = `

            <tr>

                <td colspan="5">

                    No complaint found.

                </td>

            </tr>

        `;

        return;

    }


    /* Display complaints */

    filteredComplaints.forEach(
        complaint => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    <strong>
                        ${complaint.id}
                    </strong>
                </td>

                <td>
                    ${complaint.subject}
                </td>

                <td>
                    ${complaint.category}
                </td>

                <td>

                    <span class="status ${getStatusClass(
                        complaint.status
                    )}">

                        ${complaint.status}

                    </span>

                </td>

                <td>

                    <select
                        class="status-select"
                        data-id="${complaint.id}">

                        <option value="Pending"
                            ${
                                complaint.status ===
                                "Pending"
                                    ? "selected"
                                    : ""
                            }>
                            Pending
                        </option>

                        <option value="In Progress"
                            ${
                                complaint.status ===
                                "In Progress"
                                    ? "selected"
                                    : ""
                            }>
                            In Progress
                        </option>

                        <option value="Resolved"
                            ${
                                complaint.status ===
                                "Resolved"
                                    ? "selected"
                                    : ""
                            }>
                            Resolved
                        </option>

                    </select>

                </td>

            `;


            table.appendChild(row);

        }
    );


    /* Add status events */

    const selects =
        document.querySelectorAll(
            ".status-select"
        );


    selects.forEach(select => {

        select.addEventListener(
            "change",
            function () {

                const complaintId =
                    this.dataset.id;


                const complaint =
                    complaints.find(
                        item =>
                            item.id ===
                            complaintId
                    );


                if (!complaint) {
                    return;
                }


                complaint.status =
                    this.value;


                renderMyComplaints();

                renderAdminComplaints(
                    document.getElementById(
                        "adminFilter"
                    ).value
                );


                updateDashboard();


                showToast(
                    "Complaint status updated."
                );

            }
        );

    });

}


/* =========================================
   ADMIN DASHBOARD
========================================= */

function updateDashboard() {

    const total =
        complaints.length;


    const pending =
        complaints.filter(
            complaint =>
                complaint.status ===
                "Pending"
        ).length;


    const progress =
        complaints.filter(
            complaint =>
                complaint.status ===
                "In Progress"
        ).length;


    const resolved =
        complaints.filter(
            complaint =>
                complaint.status ===
                "Resolved"
        ).length;


    /* Summary cards */

    document.getElementById(
        "totalCount"
    ).textContent = total;


    document.getElementById(
        "pendingCount"
    ).textContent = pending;


    document.getElementById(
        "progressCount"
    ).textContent = progress;


    document.getElementById(
        "resolvedCount"
    ).textContent = resolved;


    /* Bar numbers */

    document.getElementById(
        "pendingBarValue"
    ).textContent = pending;


    document.getElementById(
        "progressBarValue"
    ).textContent = progress;


    document.getElementById(
        "resolvedBarValue"
    ).textContent = resolved;


    /* Overview */

    document.getElementById(
        "overviewTotal"
    ).textContent = total;


    document.getElementById(
        "overviewPending"
    ).textContent = pending;


    document.getElementById(
        "overviewProgress"
    ).textContent = progress;


    document.getElementById(
        "overviewResolved"
    ).textContent = resolved;


    /* Calculate percentage */

    function getPercentage(value) {

        if (total === 0) {

            return 0;

        }

        return (
            value / total
        ) * 100;

    }


    /* Progress bars */

    document.getElementById(
        "pendingBar"
    ).style.width =
        getPercentage(pending) + "%";


    document.getElementById(
        "progressBar"
    ).style.width =
        getPercentage(progress) + "%";


    document.getElementById(
        "resolvedBar"
    ).style.width =
        getPercentage(resolved) + "%";

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(
        function () {

            toast.classList.remove("show");

        },
        2500
    );

}


/* =========================================
   LOGIN / REGISTRATION
========================================= */

let registrationMode = false;


const toggleAuth =
    document.getElementById(
        "toggleAuth"
    );


const authTitle =
    document.getElementById(
        "authTitle"
    );


const authDescription =
    document.getElementById(
        "authDescription"
    );


const authSubmit =
    document.getElementById(
        "authSubmit"
    );


const registerFields =
    document.querySelectorAll(
        ".register-field"
    );


/* Toggle button */

toggleAuth.addEventListener(
    "click",
    function () {

        registrationMode =
            !registrationMode;


        registerFields.forEach(
            field => {

                if (registrationMode) {

                    field.classList.remove(
                        "hidden"
                    );

                } else {

                    field.classList.add(
                        "hidden"
                    );

                }

            }
        );


        if (registrationMode) {

            authTitle.textContent =
                "Register Account";


            authDescription.textContent =
                "Create an account to access the system.";


            authSubmit.textContent =
                "Register";


            toggleAuth.textContent =
                "Already have an account? Log In";

        } else {

            authTitle.textContent =
                "Login";


            authDescription.textContent =
                "Log in to access the system.";


            authSubmit.textContent =
                "Log In";


            toggleAuth.textContent =
                "Need an account? Register";

        }

    }
);


/* =========================================
   LOGIN / REGISTRATION FORM
========================================= */

document
    .getElementById("authForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "authEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "authPassword"
                ).value.trim();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const message =
                document.getElementById(
                    "authMessage"
                );


            /* Check input */

            if (
                !email ||
                !password ||
                (
                    registrationMode &&
                    !name
                )
            ) {

                message.textContent =
                    "Please provide the required information.";

                return;

            }


            message.textContent = "";


            if (registrationMode) {

                showToast(
                    "Registration submitted."
                );

            } else {

                showToast(
                    "Login submitted."
                );

            }

        }
    );


/* =========================================
   SUBMIT COMPLAINT
========================================= */

document
    .getElementById(
        "complaintForm"
    )
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const subject =
                document.getElementById(
                    "complaintSubject"
                ).value.trim();


            const category =
                document.getElementById(
                    "complaintCategory"
                ).value.trim();


            const description =
                document.getElementById(
                    "complaintDescription"
                ).value.trim();


            const message =
                document.getElementById(
                    "complaintMessage"
                );


            /* Validate */

            if (
                !subject ||
                !category ||
                !description
            ) {

                message.textContent =
                    "Please provide the required complaint information.";

                return;

            }


            /* Create mock ID */

            const newId =
                "CMP-" +
                (
                    1001 +
                    complaints.length
                );


            /* Add complaint */

            complaints.push({

                id: newId,

                subject: subject,

                category: category,

                status: "Pending"

            });


            /* Clear message */

            message.textContent = "";


            /* Clear form */

            this.reset();


            /* Refresh */

            renderMyComplaints();

            renderAdminComplaints();

            updateDashboard();


            showToast(
                "Complaint " +
                newId +
                " submitted."
            );

        }
    );


/* =========================================
   SEARCH COMPLAINT
========================================= */

document
    .getElementById(
        "searchForm"
    )
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const id =
                document.getElementById(
                    "searchId"
                ).value
                .trim()
                .toUpperCase();


            const result =
                document.getElementById(
                    "searchResult"
                );


            const complaint =
                complaints.find(
                    item =>
                        item.id.toUpperCase()
                        === id
                );


            result.classList.remove(
                "hidden"
            );


            /* Complaint not found */

            if (!complaint) {

                result.innerHTML = `

                    <strong>
                        Complaint not found.
                    </strong>

                    <p class="muted">

                        No complaint matches
                        the entered complaint ID.

                    </p>

                `;

                return;

            }


            /* Complaint found */

            result.innerHTML = `

                <h4>
                    ${complaint.id}
                </h4>


                <div class="result-row">

                    <span>
                        Subject
                    </span>

                    <strong>
                        ${complaint.subject}
                    </strong>

                </div>


                <div class="result-row">

                    <span>
                        Category
                    </span>

                    <strong>
                        ${complaint.category}
                    </strong>

                </div>


                <div class="result-row">

                    <span>
                        Status
                    </span>

                    <strong>
                        ${complaint.status}
                    </strong>

                </div>

            `;

        }
    );


/* =========================================
   ADMIN SEARCH FILTER
========================================= */

document
    .getElementById(
        "adminFilter"
    )
    .addEventListener(
        "input",
        function () {

            renderAdminComplaints(
                this.value
            );

        }
    );


/* =========================================
   INITIALIZE APPLICATION
========================================= */

renderMyComplaints();

renderAdminComplaints();

updateDashboard();
# Giving-Hands: A Volunteer Management Website

[Live Link for Giving-Hands](https://giving-hands.netlify.app/)

## Project Overview
This is a user-friendly platform for volunteer management where users can create, update, and delete posts to request volunteers, and also volunteer for others' posts.

---

### **Technologies Used**
- **React**: Frontend framework
- **Tailwind CSS**: For styling
- **Shadcn ui** : CSS framework
- **React Router DOM**: For routing
- **SweetAlert2/React Toastify**: For alerts and notifications
- **React Datepicker**: For date input
- **Context API**: For state management (e.g., authentication, theme toggling)

### **Key Features**
1. **Authentication System**:
   - Email/Password login and registration.
   - Social login (Google).
   - Validation for password strength (uppercase, lowercase, minimum 6 characters).
   - JWT-based authentication with tokens stored on the client side httpOnly cookie.

2. **Responsive Layout**:
   - Navbar with conditional rendering for login/logout.
   - Footer with relevant information.
   - Dark/Light theme toggling.

3. **Pages**:
   - **Home Page**:
     - Eye-catching slider/banner.
     - "Volunteer Needs Now" section displaying 6 sorted posts based on the upcoming deadlines.
     - "See All" button to view all posts.
   - **Add Volunteer Need Post Page (Private Route)**:
     - Form to create a new post, including inputs for title, category, location, etc.
     - Success message on submission.
   - **Volunteer Need Post Details Page (Private Route)**:
     - Detailed view of a post with the option to volunteer.
   - **Be a Volunteer Page/Modal**:
     - Pre-filled data from the post and form for user input.
     - When volunteer needed no. 0 then you don't apply Be a volunteer see alert
     - Status set to "requested" on submission.
   - **All Volunteer Need Posts Page**:
     - Displays all posts in a card format with a search functionality.
   - **Manage My Posts Page (Private Route)**:
     - Two sections:
       - **My Volunteer Need Posts**:
         - Update and delete posts with confirmation prompts.
       - **My Volunteer Request Posts**:
         - Cancel volunteer requests with confirmation prompts.

4. **Dynamic Layouts**:
   - "Manage My Posts" page allows toggling between a three-column layout and table view.

### **Setup Instructions**
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
    VITE_apiKey=<Provide Your value>
    VITE_authDomain=<Provide Your value>
    VITE_projectId=<Provide Your value>
    VITE_storageBucket=<Provide Your value>
    VITE_messagingSenderId=<Provide Your value>
    VITE_appId=<Provide Your value>
   ```
4. Run the application:
   ```bash
   npm run dev
   ```
5. Open the browser at `http://localhost:5173`.

---

## Deployment

### **Frontend**
Deployed using **Netlify** or **Vercel**.

Ensure the client and server are connected by setting the appropriate `API_BASE_URL` in the frontend `.env` file.

---


# ToDo React App

# Live Link: https://gautam-govind-to-do-react-app.netlify.app
## Overview
The ToDo App is a responsive task management application built using React. It allows users to efficiently manage their tasks with features such as task addition, completion, deletion, editing, filtering, prioritization, and dark mode.

## Features
1. **Add a New Task**
   - Input field and "Add" button to create tasks.
   - Tasks can have priorities: High, Medium, or Low.

2. **Mark Task as Complete**
   - Checkbox to toggle task completion.
   - Completed tasks are styled differently.

3. **Delete a Task**
   - Delete button to remove tasks.

4. **Edit an Existing Task**
   - Edit button to modify task content.

5. **Filter Tasks**
   - Filter tasks by All, Completed, or Incomplete.

6. **Persist Tasks with LocalStorage**
   - Tasks are saved in LocalStorage and loaded on app startup.

7. **Responsive Design + Dark Mode**
   - Mobile-first layout for seamless use on all devices.
   - Dark mode toggle for better accessibility.

8. **Task Priority + Sorting**
   - Tasks are sorted by priority (High → Medium → Low).
   - Priority is displayed alongside task names.

## Technologies Used
- **Frontend**: React (with JSX), CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Storage**: LocalStorage for task persistence

## Project Structure
```
public/
  favicon.ico
  index.html
  ...
src/
  App.css
  App.js
  components/
    FilterBar.js
    TaskForm.js
    TaskList.js
  ...
```

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd to_do_react_app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## Screenshots
### Light Mode
![Light Mode Screenshot](https://github.com/user-attachments/assets/f96a4dc8-306a-4650-acd2-35a6e170598d)

### Dark Mode
![Dark Mode Screenshot](https://github.com/user-attachments/assets/33a8d6f8-1916-42ca-be3f-60638e03c603)

## Contribution
Contributions and support are appreciated for adding more advanced features.


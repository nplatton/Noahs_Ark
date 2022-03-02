# Ideas

## Swipe Element

- [x] Recreate it in React
- [ ] Get it to react to the mouse drag (it drags with the mouse)

## Login/Registration Forms

- [ ] Create login form

  - [x] Add username/email field
    - [ ] Make it login regardless of whether input is username or email
    - [ ] Make them case insensitive on login
  - [x] Add password field
  - [x] Add submit button
  - [ ] Add option change password if forgotten
    - [ ] Use `fingerprintjs` for recognition
    - [ ] Instead could send email using `nodemailer`
  - [ ] Format the layout
  - [x] Add to left side of swipe element
  - [x] State at bottom "swipe right for registration"
  - [ ] On form submission send request to server
  - [ ] On successful response log user in

- [ ] Create reg form
  - [ ] Add username field
    - [ ] Make usernames unique
    - [ ] Store as they're inputted
  - [ ] Add email field
  - [ ] Add password field
    - [ ] Add password requirements (at least one capital/number/special char. etc)
    - [ ] Add password strength notifier (dynamically updates according to what's written)
  - [ ] Add "confirm password" field
  - [ ] Add to right side of swipe element

Have a "login" tab on the navbar
Once logged in it redirects to the homepage
Home page has greeting to logged in user
The "login" tab turns into a "logout" button

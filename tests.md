# AUTOMATED TESTS

---

## TC-1 Successfully create a profile by submitting the Waitlist form

### Steps

1. Go to /waitlist
2. Fill in the form
3. Click "Submit"

### Expected result

Should be logged in

---

## TC-2 User should not be able to use already used email while submitting the Waitlist form

### Steps

1. Go to /waitlist
2. Fill in the form with email that is already used
3. Click "Submit"

### Expected result

"This email is already being used." should be displayed on the screen

---

## TC-3 Successfully submit the contact form as a customer

### Steps

1. Go to /contact
2. Fill in the form as a customer
3. Click "Submit"

### Expected result

Message for successfully submitted form should be displayed on the screen

---

## TC-4 Successfully submit the contact form as a partner

### Steps

1. Go to /contact
2. Fill in the form as a partner
3. Click "Submit"

### Expected result

Message for successfully submitted form should be displayed on the screen

---

## TC-5 Successfully submit the contact form as a press

### Steps

1. Go to /contact
2. Fill in the form as a press
3. Click "Submit"

### Expected result

Message for successfully submitted form should be displayed on the screen

---

## TC-6 Successfully request a magic link

###Steps

1. Go to /login
2. Enter email of already registered user
3. Click "Log in"

### Expected result

Message for successfully requested magic link should be displayed on the screen

---

## TC-7 User should not be able to request a magic link using not registered email

###Steps

1. Go to /login
2. Enter email that is not registered
3. Click "Log in"

### Expected result

"Email not found" message should be displayed on the screen

---

## TC-8 Log in with magic link

###Steps

1. Copy the magic link sent to you via magic link and paste it in the url
2. Click "Enter"

### Expected result

Should be logged in

---

## TC-9 Successfully log out

###Steps

1. Go to /login
2. Log in successfully (via Gmail, Apple or magic link)
3. Click on your name in the header
4. Click "Log out"

### Expected result

Should be logged out

---

## TC-10 Successfully join the Priority Waitlist

###Steps

1. Log in successfully (via Gmail, Apple or magic link)
2. Should be redirected to the Dashboard page
3. Click on "Find a home"
4. Click on "Skip to homes"
5. Click on "Join Priority Waitlist"
6. Select the number of bedrooms you are looking for
7. Click on "Join Waitlist"
8. Enter legal name, sign all the documents and fill in Stripe form
9. Click on complete payment

### Expected result

Successfully Joined the Priority Waitlist screen should be displayed

---

## TC-11 Successfully switch from Priority waitlist to unit reservation

###Steps

1. Log in successfully (via Gmail, Apple or magic link)
2. Should be redirected to the Dashboard page
3. Click on "Find a home"
4. Click on "Skip to homes"
5. Click on "Join Priority Waitlist"
6. Select the number of bedrooms you are looking for
7. Click on "Join Waitlist"
8. Enter legal name, sign all the documents and fill in Stripe form
9. Click on complete payment
10. Go to Dashboard page
11. Click on "Enter Design Studio" button
12. Select an available unit
13. Click on Reserve

### Expected result

Successfully Reserve Nabr Home should be displayed on the screen

## TC-12 Successfully reserve a unit

###Steps

1. Log in successfully (via Gmail, Apple or magic link)
2. Should be redirected to the Dashboard page
3. Click on "Find a home"
4. Click on "Skip to homes"
5. Select an available unit
6.

7. Enter legal name, sign all the documents and fill in Stripe form
8. Click on complete payment
9. Select the number of bedrooms you are looking for
10. Click on "Join Waitlist"
11. Enter legal name, sign all the documents and fill in Stripe form
12. Click on complete payment
13. Go to Dashboard page
14. Click on "Enter Design Studio" button
15. Select an available unit
16. Click on Reserve

### Expected result

Successfully Reserve Nabr Home should be displayed on the screen

## TC-13 Successfully cancel a unit reservation

###Prerequisites

1. You should already have reserved a unit

###Steps

1. Log in successfully (via Gmail, Apple or magic link)
2. Should be redirected to the Dashboard page
3. Click on "Actions" button"
4. Click on "Cancel and refund"
5. Click to confirm

### Expected result

"Refund had been successfully initiated" should be displayed on the screen

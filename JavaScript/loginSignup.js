/*
    ***** User Schema *****
    {
        mobileNumber: String,
        email: String,
        cartItems: [],
        boughtItems: [],
        otp: String,
        loggedIn: Boolean
    }
*/

var registeredUsers = [];
var currentLoggedInUser = {};

function updateUsers() {
    if (!localStorage.getItem(allEnums.registeredUsers)) {
        localStorage.setItem(allEnums.registeredUsers, "[]");
    } else {
        registeredUsers = JSON.parse(localStorage.getItem(allEnums.registeredUsers));
    }

    if (!localStorage.getItem(allEnums.currentLoggedInUser)) {
        localStorage.setItem(allEnums.currentLoggedInUser, "{}");
    } else {
        currentLoggedInUser = JSON.parse(localStorage.getItem(allEnums.currentLoggedInUser));
    }
}

updateUsers();

if (window.location.pathname.includes("signup.html")) {
    if (currentLoggedInUser && currentLoggedInUser.loggedIn) {
        alert("You are already logged in");
        window.location.assign("index.html");
    }
}

function hideNonLoggedInDesktopNav() {
    if (window.innerWidth >= 992) {
        let desktopNavLoggedIn = document.getElementById("desktop-nav-logged-in");
        desktopNavLoggedIn.style.display = "flex";
        let desktopNavNotLoggedIn = document.getElementById("desktop-nav-not-logged-in");
        desktopNavNotLoggedIn.style.display = "none";
        let desktopNav = document.getElementById("desktop-nav");
        desktopNav.style.display = "flex";
    } else {
        let desktopNav = document.getElementById("desktop-nav");
        desktopNav.style.display = "none";
        let desktopNavLoggedIn = document.getElementById("desktop-nav-logged-in");
        desktopNavLoggedIn.style.display = "none";
        let desktopNavNotLoggedIn = document.getElementById("desktop-nav-not-logged-in");
        desktopNavNotLoggedIn.style.display = "none";
    }
}

function showNonLoggedInDesktopNav() {
    if (window.innerWidth >= 992) {
        let desktopNav = document.getElementById("desktop-nav");
        desktopNav.style.display = "flex";
        let desktopNavLoggedIn = document.getElementById("desktop-nav-logged-in");
        desktopNavLoggedIn.style.display = "none";
        let desktopNavNotLoggedIn = document.getElementById("desktop-nav-not-logged-in");
        desktopNavNotLoggedIn.style.display = "flex";
    } else {
        let desktopNav = document.getElementById("desktop-nav");
        desktopNav.style.display = "none";
        let desktopNavLoggedIn = document.getElementById("desktop-nav-logged-in");
        desktopNavLoggedIn.style.display = "none";
        let desktopNavNotLoggedIn = document.getElementById("desktop-nav-not-logged-in");
        desktopNavNotLoggedIn.style.display = "none";
    }
}

function showUserNumberInNav() {
    let loggedInUserNumber = document.getElementsByClassName("loggedInUserNumber");
    console.log({ loggedInUserNumber });
    for (let span of loggedInUserNumber) {
        span.innerText = (currentLoggedInUser.mobileNumber) ? currentLoggedInUser.mobileNumber : currentLoggedInUser.email;
        span.setAttribute("class", "fs-12");
    }
}

function showAppropriateNavbar() {
    if (currentLoggedInUser && currentLoggedInUser.loggedIn) {
        hideNonLoggedInDesktopNav();
        showUserNumberInNav();
    } else {
        showNonLoggedInDesktopNav();
    }
}

showAppropriateNavbar();

window.addEventListener("resize", function (event) {
    showAppropriateNavbar();
});

function openLoginModal(event) {
    event.preventDefault();
    let loginModal = document.querySelector("#sign-up-login.index-page");
    loginModal.style.animationDuration = "0.3s";
    loginModal.style.animationName = "slidedown";
    loginModal.style.top = "113px";
}

function closeLoginModal() {
    let loginModal = document.querySelector("#sign-up-login.index-page");
    loginModal.style.animationDuration = "0.3s";
    loginModal.style.animationName = "slideup";
    loginModal.style.top = "-1000px";
}

function getNewOtp() {
    let validString = "0123456789";
    let otp = "";

    for (var i = 0; i < 6; i++) {
        let i = Math.floor(Math.random() * 10);
        otp += validString[i];
    }

    return otp;
}

function getNewUser(mobile, email) {
    if (mobile) {
        updateUsers();
        let existingUser = registeredUsers.filter((g) => g.mobile === mobile);
        if (existingUser.length > 0) {
            let u = existingUser[0];
            u.otp = getNewOtp();
            return u;
        }
    }
    if (email) {
        updateUsers();
        let existingUser = registeredUsers.filter((g) => g.email === email);
        if (existingUser.length > 0) {
            let u = existingUser[0];
            u.otp = getNewOtp();
            return u;
        }
    }
    return {
        mobileNumber: mobile,
        email: email,
        cartItems: [],
        boughtItems: [],
        otp: getNewOtp(),
        loggedIn: false
    }
}

function setCurrentUser(thisUser) {
    localStorage.setItem(allEnums.currentLoggedInUser, JSON.stringify(thisUser));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(allEnums.currentLoggedInUser));
}

function changeLoginMethod(val) {
    localStorage.setItem(allEnums.loginMethod, val);
}

function getLoginMethod() {
    return localStorage.getItem(allEnums.loginMethod);
}

function setRegisteredUsers() {
    localStorage.setItem(allEnums.registeredUsers, JSON.stringify(registeredUsers));
}

function showOtpView() {
    let otpView = document.getElementById("otp-view-container");
    let loginSignUpView = document.getElementById("login-signup-view-container");
    otpView.style.display = "block";
    loginSignUpView.style.display = "none";
}

function showLoginSignupView() {
    let otpView = document.getElementById("otp-view-container");
    let loginSignUpView = document.getElementById("login-signup-view-container");
    otpView.style.display = "none";
    loginSignUpView.style.display = "block";
}

function pushToRegisteredUsers(user) {
    let ind = -100;
    let f = registeredUsers.filter((u, i) => { if (u.mobileNumber === user.mobileNumber || u.email === user.email) { ind = i; return true; } return false; });
    console.log({ f })
    if (f.length > 0 && ind !== -100) {
        registeredUsers[ind] = user;
    } else {
        registeredUsers.push(user);
    }

    alert(`Your OTP is: ${user.otp}. It is also printed on Console as a user object`);
}

function signUp() {
    let mobileNumberInput = document.getElementById("mobile-number-input");
    let emailInput = document.getElementById("email-input");

    let loginMethod = getLoginMethod();

    let user;
    if (loginMethod === "mobile") {
        user = getNewUser(mobileNumberInput.value, undefined);
    } else if (loginMethod === "email") {
        user = getNewUser(undefined, emailInput.value);
    } else {
        alert("Something is not right.");
        return;
    }
    updateUsers();
    pushToRegisteredUsers(user);
    setRegisteredUsers();
    setCurrentUser(user);
    console.log({ user });
    showOtpView();

    let currentUserNumber = document.getElementById("current-user-number");
    let checkOtpText = document.getElementById("check-otp-text");
    if (user.mobileNumber) {
        currentUserNumber.innerText = user.mobileNumber;
        checkOtpText.innerText = "Please check the OTP sent on Your Mobile Number";
    } else if (user.email) {
        currentUserNumber.innerText = user.email;
        checkOtpText.innerText = "Please check the OTP sent on Your Email";
    }
}

function logIn() {
    let currUser = getCurrentUser();

    if (!currUser) {
        alert("Please enter signup first");
        return;
    }

    let otpInput = document.getElementById("otp-input");

    if (currUser.otp === otpInput.value) {
        updateUsers();
        let lm = localStorage.getItem(allEnums.loginMethod);
        let found = false;
        let nRUs = registeredUsers.map(u => {
            if (u["lm"] === currUser["lm"]) {
                u.loggedIn = true;
                setCurrentUser(u);
                found = true;
            }
        });
        if (found) {
            alert("Your are now logged in.");
            hideNonLoggedInDesktopNav();
            closeLoginModal();
            showUserNumberInNav();
        }
        setRegisteredUsers(nRUs);
    } else {
        alert("Incorrect OTP");
    }
}

function logout() {
    console.log("Logging you out...");
    updateUsers();
    if (currentLoggedInUser) {
        console.log("found user");
        currentLoggedInUser = {};
        localStorage.setItem(allEnums.currentLoggedInUser, "{}");
        window.location.reload();
    }
}

function validateMobileNumberInput(e) {
    changeLoginMethod("mobile");
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    e.target.value = input;

    let continueButton = document.getElementById("continue-button");

    if (input.length === 10) {
        continueButton.removeAttribute("disabled");
    } else {
        continueButton.setAttribute("disabled", "disabled");
    }
}

function validateOtp(e) {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (input.length > 6) {
        input = input.slice(0, 6)
    }
    e.target.value = input;

    let verifyContinueButton = document.getElementById("verify-continue-button");

    if (input.length === 6) {
        verifyContinueButton.removeAttribute("disabled");
    } else {
        verifyContinueButton.setAttribute("disabled", "disabled");
    }
}

function validateEmailAddressInput(e) {
    changeLoginMethod("email");
    let continueButton = document.getElementById("continue-button");

    if (e.target.validity.valid) {
        continueButton.removeAttribute("disabled");
    } else {
        continueButton.setAttribute("disabled", "disabled");
    }
}

function switchEmailAndMobileInput() {
    let mobileNumberInput = document.getElementById("mobile-number-input");
    let emailInput = document.getElementById("email-input");
    let continueButton = document.getElementById("continue-button");

    let switchLoginMethodButton = document.getElementById("switch-login-method-button");

    if (switchLoginMethodButton.innerText.includes("Email")) {
        changeLoginMethod("email");
        mobileNumberInput.style.display = "none";
        emailInput.style.display = "block";
        if (emailInput.validity.valid && emailInput.value.length > 0) {
            continueButton.removeAttribute("disabled");
        } else {
            continueButton.setAttribute("disabled", "disabled");
        }
        switchLoginMethodButton.innerText = "Login using Mobile Number";
    } else if (switchLoginMethodButton.innerText.includes("Mobile")) {
        changeLoginMethod("mobile");
        mobileNumberInput.style.display = "block";
        emailInput.style.display = "none";
        if (mobileNumberInput.value.length === 10) {
            continueButton.removeAttribute("disabled");
        } else {
            continueButton.setAttribute("disabled", "disabled");
        }
        switchLoginMethodButton.innerText = "Login using Email Address";
    }
}

let mni = document.getElementById("mobile-number-input");
if (mni) mni.addEventListener("input", validateMobileNumberInput);

let ei = document.getElementById("email-input");
if (ei) ei.addEventListener("input", validateEmailAddressInput);
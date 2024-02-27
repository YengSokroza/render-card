'use strict'

import { getData } from "../store/fetchApi.js";
import { usersCard } from "../components/userCard.js";

const renderArea = document.querySelector('#render-area');

const users = await getData("users")
console.log(users)

users.map((user) => {
    renderArea.innerHTML +=  usersCard(user)
})
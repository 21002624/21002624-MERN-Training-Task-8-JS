.container, h2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border-radius: 5px;
}


@media (max-width: 768px) {
    .container, h2 {
        width: 80%;
        margin-top: 5%;
    }
}

@media (max-width: 480px) {
    .container, h2 {
        width: 90%;
        margin-top: 3%;
    }
}
.input {
    border: 2px solid transparent;
    width: 15em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;
}

.input:hover,
.input:focus {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgba(74, 157, 236, 0.2);
    background-color: white;
}

button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: dodgerblue;
    color: white;
    border-radius: 4px;
    margin-bottom: 5%;
    margin-top: 5%;
}

button:hover {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%);
}

button:active {
    transform: translate(0em, 0.2em);
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#display {
    width: 50%;
    flex-direction: column-reverse;
    display: flex;
    justify-content: end;
}

#deleteBtn {
    margin-left: 20px;
}


@media (max-width: 768px) {
    #display {
        width: 70%;
    }
}

@media (max-width: 480px) {
    #display {
        width: 90%;
    }
}

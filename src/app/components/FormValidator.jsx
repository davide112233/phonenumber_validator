'use client';

import { useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";

const FormValidator = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        const phoneNumberFormContainer = document.getElementById('phonenumberform-container');
        const phoneNumberValidatorForm = document.getElementById('phonenumber-validator-form');
        const phonenumberInput = document.getElementById('phonenumber-input');
        const buttonsBox = document.getElementById('buttons-box');
        const checkNumberBtn = document.getElementById('checknumber-btn');
        const clearFormBtn = document.getElementById('clearform-btn');
        const resultsOutput = document.getElementById('results-output');

        phoneNumberFormContainer.classList.add("container", "p-3", "d-flex", "justify-content-lg-start", "justify-content-center");
        phoneNumberValidatorForm.classList.add("d-flex", "flex-lg-row", "flex-column", "gap-3");
        phonenumberInput.classList.add("form-control");
        checkNumberBtn.classList.add("btn", "btn-success");
        clearFormBtn.classList.add("btn", "btn-danger");

        phonenumberInput.placeholder = DOMPurify.sanitize("Inserisci un numero di telefono");
        phonenumberInput.type = "text";

        checkNumberBtn.innerText = DOMPurify.sanitize("Controlla");
        clearFormBtn.innerText = DOMPurify.sanitize("Resetta");
        checkNumberBtn.type = "button";
        clearFormBtn.type = "button";

        buttonsBox.classList.add("d-flex", "justify-content-lg-start", "justify-content-center");
        buttonsBox.style.gap = "12px";

        const numberChecker = (phoneNumber) => {
            const usPhoneNumberRegex = /^(?:(?:\+39|0039)\s?)?([0-9]{2,4})[\s.-]?([0-9]{3,4})[\s.-]?([0-9]{3,4})$/;
            return usPhoneNumberRegex.test(phoneNumber);
        }

        checkNumberBtn.addEventListener('click', () => {
            let inputText = DOMPurify.sanitize(phonenumberInput.value.trim());

            if(inputText === DOMPurify.sanitize("")) {
                resultsOutput.innerText = DOMPurify.sanitize("Devi inserire un numero di telefono");
            } else if (numberChecker(inputText) && inputText.length === 10) {
                resultsOutput.innerText = DOMPurify.sanitize(`Il numero di telefono ${inputText} è valido`);
                inputText = DOMPurify.sanitize("");
            } else {
                resultsOutput.innerText = DOMPurify.sanitize(`Il numero di telefono ${inputText} non è valido`);
            }
        });

        clearFormBtn.addEventListener('click', () => {
            if(phonenumberInput.value === DOMPurify.sanitize("")) {
                alert(DOMPurify.sanitize("Non c'è niente da resettare, visto che il programma sembra vuoto"));
            } else {
                phonenumberInput.value = DOMPurify.sanitize("");
                resultsOutput.textContent = DOMPurify.sanitize("");
            }
        });

        const resultBox = document.querySelector('.result-box');

        resultBox.classList.add("container-fluid", "px-lg-4", "p-0");

        resultsOutput.classList.add("lead", "text-lg-start", "text-center");
    }, []);

    return (
        <>
            <div id="phonenumberform-container">
                <form id="phonenumber-validator-form">
                    <input id="phonenumber-input" />
                    <div id="buttons-box">
                        <button id="checknumber-btn" />
                        <button id="clearform-btn" />
                    </div>
                </form>
            </div>
            <div className="result-box">
                <p id="results-output"></p>
            </div>
        </>
    );
}

export default FormValidator;
'use client';

import { useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import { CiCircleInfo } from "react-icons/ci";

const Navbar = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        const navbar = document.getElementById('navbar');

        navbar.classList.remove("bg-body-tertiary");

        const navbarBrand = document.getElementById('navbar-brand');

        navbarBrand.innerText = DOMPurify.sanitize("Phone number validator");
        navbarBrand.style.fontSize = "x-large";

        const modalBtn = document.getElementById('modal-btn');

        modalBtn.classList.remove("btn-primary");

        const circleInfoIcon = document.getElementById('circleinfo-icon');

        circleInfoIcon.style.fontSize = "xx-large";

        const modalTitle = document.querySelector('.modal-title');

        modalTitle.innerText = DOMPurify.sanitize("Come funziona?");

        const modalBody = document.querySelector('.modal-body');

        modalBody.innerHTML = DOMPurify.sanitize(`In questa applicazione potrai verificare la validità di un numero di telefono italiano, con o senza prefisso (+39). Inserisci il numero di telefono che vuoi testare nell'input di testo e clicca su CONTROLLA per vedere il risultato`);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" id="navbar-brand" href="/" />
                    <form className="d-flex" role="search">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="modal-btn"><CiCircleInfo id="circleinfo-icon" /></button>
                        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
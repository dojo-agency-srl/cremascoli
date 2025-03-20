import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { contatti } from "site-structure.js";

const Contact = ({ title }) => {
	const [isAccepted, setIsAccepted] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsAccepted(event.target.checked);
	};

	useEffect(() => {
		document.title = title;
	}, []);

	const onSubmit = (data) => {
		const { name, phone, subject, message } = data;

		const mailtoLink = `mailto:${
			contatti.mail
		}?subject=Nuovo Contatto da sito: ${encodeURIComponent(
			subject
		)}&body=Nome: ${encodeURIComponent(name)}%0D%0ATelefono: ${encodeURIComponent(
			phone
		)}%0D%0AMessaggio: ${encodeURIComponent(message)}`;

		window.location.href = mailtoLink;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<section id="contact-section" class="wprt-section">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="wprt-information">
							<h4 class="margin-bottom-15">CHIAMACI</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus
								pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend
								ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem
								at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed
								eu vestibulum elit. Curabitur tortor mi, eleifend ornare. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit.
							</p>
							<ul class="style-2">
								<li class="address">
									<span class="hl">Indirizzo:</span>
									<span class="text">&nbsp;{contatti.indirizzo}</span>
								</li>
								<li class="phone">
									<span class="hl">Telefono:</span>
									<span class="text">&nbsp;{contatti.phone}</span>
								</li>
								<li class="email">
									<span class="hl">E-mail:</span>
									<span class="text">&nbsp;{contatti.mail}</span>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-md-8">
						<h4 class="margin-bottom-15">SCRIVICI</h4>
						<form onSubmit={handleSubmit(onSubmit)} class="contact-form wpcf7-form">
							<div class="wprt-contact-form-1">
								<span class="wpcf7-form-control-wrap name">
									<input
										type="text"
										tabindex="1"
										id="name"
										name="name"
										class="wpcf7-form-control"
										placeholder="Scrivi qui nome e cognome *"
										{...register("name", { required: "Il nome è obbligatorio" })}
									/>
									{errors.name && <span>{errors.name.message}</span>}
								</span>
								<span class="wpcf7-form-control-wrap phone">
									<input
										type="text"
										tabindex="3"
										id="phone"
										name="phone"
										class="wpcf7-form-control"
										placeholder="Scrivi qui il numero di telefono *"
										{...register("phone", {
											required: "Il numero di telefono è obbligatorio",
											pattern: {
												value: /^[0-9+\s-]{7,15}$/,
												message: "Inserisci un numero valido (solo numeri, spazi, + e -)",
											},
										})}
									/>
									{errors.phone && <span>{errors.phone.message}</span>}
								</span>
								<span class="wpcf7-form-control-wrap subject">
									<input
										type="text"
										tabindex="4"
										id="subject"
										name="subject"
										class="wpcf7-form-control"
										placeholder="Scrivi qui l'oggetto della richiesta *"
										{...register("subject", {
											required: "L'oggetto della richiesta è obbligatorio",
										})}
									/>
									{errors.subject && <span>{errors.subject.message}</span>}
								</span>
								<span class="wpcf7-form-control-wrap message">
									<textarea
										name="message"
										tabindex="5"
										cols="40"
										rows="10"
										class="wpcf7-form-control wpcf7-textarea"
										placeholder="Scrivi qui il messaggio"
										{...register("message", {
											required: "Il messaggio è obbligatorio",
										})}></textarea>
									{errors.message && <span>{errors.message.message}</span>}
								</span>
								<span
									class="wpcf7-form-control-wrap message"
									style={{ display: "block", marginBottom: 20 }}>
									<input
										type="checkbox"
										id="acceptance-checkbox"
										className="acceptance-checkbox"
										onChange={handleCheckboxChange}
									/>
									<label htmlFor="acceptance-checkbox" className="acceptance-label">
										<div>
											&nbsp;Letta la <Link to="">Privacy Policy</Link>, presto il mio consenso ad
											essere ricontattato
										</div>
									</label>
								</span>
								<div class="wrap-submit">
									<input
										type="submit"
										value="INVIA MESSAGGIO"
										class="submit wpcf7-form-control wpcf7-submit"
										id="submit"
										name="submit"
										style={{
											pointerEvents: isAccepted ? "auto" : "none",
											opacity: isAccepted ? 1 : 0.2,
										}}
									/>
								</div>
							</div>
						</form>
					</div>

					<div class="col-md-12" style={{ paddingTop: 80 }}>
						<div id="gmap" class="wprt-gmap">
							<iframe
								width="100%"
								height="600"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Via%20Felice%20Cavallotti%20211,%2026841%20Casalpusterlengo%20(LO)+(IMPRESA%20UMBERTO%20CREMASCOLI)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

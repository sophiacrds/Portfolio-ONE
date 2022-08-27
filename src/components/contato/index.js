import React from "react";
import { Btn, ContatoSec, DivContent, Form, Img } from "./style";
import contact from "../../images/contact.png";

export default function Contato() {
	return (
		<ContatoSec>
			<Img src={contact} alt="Imagem de telefone" />
			<DivContent>
				<h2>Contato</h2>
				<p>Quer entrar em contato comigo?</p>
				<p>
					Preencha o formulário abaixo e entrarei em contato o mais rápido
					possível.
				</p>
				<Form>
					<input type="text" placeholder="Nome completo" />
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Assunto" />
					<textarea
						name=""
						id=""
						cols="30"
						rows="8"
						placeholder="Mensagem"
					></textarea>
					<Btn color={true}>Enviar mensagem</Btn>
				</Form>
			</DivContent>
		</ContatoSec>
	);
}

import React from "react";
import photo from "./assets/photo.png";
import { Image } from "~/react/components/image";
import styles from "./styles.module.css";
import { Heading } from "~/react/components/typo/components/heading";
import { Text } from "~/react/components/typo/components/text";
import { Paragraph } from "~/react/components/typo/components/paragraph";
import { Link } from "~/react/components/typo/components/link";

export const IndexPage = (): React.ReactElement => (
	<div>
		<div className={styles.jumbotron}>
			<Image className={styles.photo} src={photo} alt="Максим Зайцев - школьный учитель" />
			<div className={styles.content}>
				<Heading level={4} as="h1">Зайцев Максим Викторович</Heading>
				<Text light>учитель математики и информатики</Text>
				<Paragraph>
					Здравствуйте! Меня зовут
					{" "}
					<Link to="/work">Зайцев Максим Викторович</Link>
					. Я окончил Ярославский государственный университет им. П. Г. Демидова по специальности
					«Прикладная математика и информатика».
				</Paragraph>
				<Paragraph>
					Я - учитель 5-11-х классов с девятилетним стажем работы. На данный момент
					преподаю математику в
					{" "}
					<Link target="_blank" external to="https://is.gd/75vbhf">
						Средней общеобразовательной школе № 8
					</Link>
					{" "}
					города Костромы.
				</Paragraph>
			</div>
		</div>
	</div>
);

IndexPage.displayName = "IndexPage";

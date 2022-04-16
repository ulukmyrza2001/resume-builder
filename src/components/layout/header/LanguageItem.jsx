import styled from 'styled-components'

const LanguageItem = ({languages, changeLanguage, resolvedLng}) => {
	return languages.map((language) => (
		<LanguageItemStyled
			isLng={resolvedLng === language.code}
			onClick={() => changeLanguage(language.code)}
			key={language.code}
		>
			<IconLanguage src={language.icon} />
			{language.name}
		</LanguageItemStyled>
	))
}


const LanguageItemStyled = styled.button`
    border: none;
	width: 100%;
	padding: 0.5rem 2rem;
	background-color: whitesmoke;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	color: #53626e;
	font-weight: bold;
	display: flex;
	align-items: center;

	transition: 0.2s;
	opacity: ${(props) => (props.isLng ? '0.7' : '1')};
	cursor: pointer;
	&:hover {
		background-color: ${(props) => (props.isLng ? 'whitesmoke' : '#e2e2e2')} ;
	}
`
const IconLanguage = styled.img`
	width: 25px;
	height: 25px;
	margin-right: 10px;
	cursor: pointer;
`
export default LanguageItem
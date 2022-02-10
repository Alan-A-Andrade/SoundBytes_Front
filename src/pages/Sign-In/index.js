import Container from "../../components/Container"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleText from "../../components/PageTitle/TitleText"
import TitleStyle from "../../components/PageTitle/TitleStyle"
import Form from "../../components/Form/Form"
import Input from "../../components/Form/Input"
import Button from "../../components/Form/Button"
import Loading from "../../services/loading"
<<<<<<< HEAD
import { useState, useEffect} from "react"
=======
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useSessionData from "../../hooks/useSessionData"
import api from "../../services/api"
>>>>>>> SignInAndSignUp


export default function SignIn(){

    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
<<<<<<< HEAD
=======
    const { auth, login } = useAuth();
    const { sessionData, updateSessionData} = useSessionData();
    const navigate = useNavigate();
>>>>>>> SignInAndSignUp

    const loginItems = [{placeholder: 'E-mail', type: 'email', state: setEmail}, {placeholder: 'Senha', type: 'password', state: setPassword}];


<<<<<<< HEAD
=======
    function RequestLogin(e){
        e.preventDefault();
        setIsLoading(true);

        const user = {email: email, password: password};
        
        const promise = api.login(user);

            promise.then(res => {
                setIsLoading(false);
                console.log(res.data);
                login(res.data.token);
                updateSessionData(res.data.user);
                
                navigate('/mainpage')}
                );

            promise.catch(() => {
                setIsLoading(false);
                alert('Erro!')}
            );


    }


>>>>>>> SignInAndSignUp
    function ButtonContent(){
        if(isLoading === true){
            return(
                <Loading color="#FFF" height={40} width={40}/> 
            )
        }
        else{
            return(<span>Entrar</span>)
        }
    }

<<<<<<< HEAD
=======



>>>>>>> SignInAndSignUp
    return(
        <>
            <Container>
               <Content>
                    <PageTitle>
                        <TitleText>Entrar</TitleText>
                        <TitleStyle/>
                    </PageTitle>

<<<<<<< HEAD
                    <Form>
                        {loginItems.map((item) => 
                            (<Input disabled={isLoading === true? true : false} placeholder={item.placeholder} type={item.type} onChange={(e) => item.state(e.target.value)}></Input>)
                        )}

                    <Button type="submit" disabled={isLoading === true? true : false}>
                        <ButtonContent/>
                    </Button>
                    </Form>

=======
                    <Form onSubmit={RequestLogin}>
                        {loginItems.map((item, index) => (<Input opacity={isLoading === true? 0.8 : 1} disabled={isLoading === true? true : false} placeholder={item.placeholder} type={item.type} key={index}></Input>))}

                        <Button type="submit">
                            <ButtonContent/>
                        </Button>
                    </Form>
                    
>>>>>>> SignInAndSignUp
               </Content>
            </Container>
        </>
    )
}
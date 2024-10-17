import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    //Com o uso do props podemos comentar esse codigo que não afetará o codigo por conta das informações puxar do props
    // const usuario = {
    //     nome: 'Gabriel Bayer',
    //     avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHfoXlBmrMJEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713961455885?e=1733961600&v=beta&t=B71ONrYRvaivI_z_BvznKi4_SN-ShIBDuR9964C6TXc'
    // }
//Fazendo a desestrutução da proprieda
//Criando essa constante nos permite a usar apenas o nome a propriedade sem precisar usarmos 'props.nome' para ultilizar
    // const { endereco, nome } = props;
    //Podemos adicionar os argumentos da props diretamente na constante do perfil em vez de chamarmos ela, assim reduzimos nosso codigo

    return (
        <header className={styles.header}>
            {/* apartir disso conseguimos transformar um objeto em uma string, comentamos o objeto pois não ultilizamos mais a props*/}
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;
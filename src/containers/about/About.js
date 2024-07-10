import React from 'react'

const About = () => {
  const container = {
    margin: '20px auto 40px auto',
    width: '90%',
    maxWidth: '700px'
  }

  const paragraph = {
    marginBottom: '15px',
    color: 'rgba(54, 54, 54, 0.9)',
    fontSize: '17px'
  }

  return (
    <main style={container}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Quem Somos</h1>
      <section>
        <p style={paragraph}>
          O AdoPet é um site voltado para a adoção de pets e a gestão destes animais por administradores e voluntários do projeto.
        </p>
        <p style={paragraph}>
          Com o intuito de ter maior visibilidade e buscando uma maneira mais ecologica de lidar com a adoção de animais no Brasil, notou-se
          a possibilidade de criar um website para fazer o processo de adoção dos animais resgatados pela AdoPet, automatizando e melhorando muito
          toda a execução que leva desde o resgate de anúncio de um animal específico até sua adoção de fato por alguem. 
        </p>
        <p style={paragraph}>
          Mais do que isso, a AdoPet é uma empresa que preza pela sustentabilidade e a partir dessa premissa, viu a oportunidade de tentar automatizar ao máximo todo
          o antigo processo, gerando maiores beneficios para nós e também para o meio ambiente.
        </p>
        <p style={paragraph}>
          Com o website, conseguimos diminuir em 70% a utilização de folhas e tinta que antes eram necessárias para manter o rastreio de todos os animais que existem no projeto,
          além disso, foi possível reduzir o número de voluntários que eram responsáveis só pela parte administrativa, devido ao fato do próprio website possuir uma área para a administração.
          Junto com esses dois pontos, tivemos também uma redução no espaço necessário para manter todos os arquivos e documentos, já que a partir de agora temos tudo digitalizado e em nuvem.
          E por fim, a partir de agora é possível garantir uma maior integridade de dados, pois existem backups que garantem que nenhum dado seja perdido no futuro.
        </p>
      </section>
    </main>
  )
}

export default About;

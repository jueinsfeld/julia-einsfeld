import { useRouter } from 'next/router';
import NextLink from 'next/link';
import dados from '../../dados.json';
import { Box, Text } from '@skynexui/components';

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: 'blocking' //false or blocking
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const post = dados.posts.find((currentPost) => {
    if (currentPost.id === id) {
      return true;
    }
    return false;
  })

  return {
    props: {
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
    },
    revalidate: 60,
  }
}

export default function PostByIdScreen(props) {
  const router = useRouter();
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  };

  if (router.isFallback) {
    return 'Essa página não existe, ainda!!'
  }

  return (
<Box
styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
>
  {/*Cabeçalho*/}
    <Text
      variante='heading2'
      tag='h1'
      styleSheet={{ 
        color: '#f71eae', 
        justifyContent: 'center', 
        lineHeight: '1.2' 
      }}
    >
      {post.title}
    </Text>
    <Text
      styleSheet={{ 
        color: '#f71eae', 
        justifyContent: 'center', 
        borderBottom: '1px solid #f71eae', 
        paddingVertical: '16px', 
        marginVertical: '16px' 
      }}
    >
      {post.date}
    </Text>

  {/*Área de conteúdo*/}
    <Box
      styleSheet={{
        flexDirection: 'column',
      }}
    >
      <Text>
        {post.content}
      </Text>
      {post.video && <iframe style={{ marginTop: '32px', minHeight: '400px'  }} src={post.video} />}
    </Box>  

  {/*Rodapé*/}
    <Box
      styleSheet={{
      marginTop: '16px',
      paddingVertical: '16px',
      borderTop: '1px solid #f71eae',
      color: '#f71eae',
    }}
   >
      <NextLink href='/' passHref>
        <Text styleSheet={{ hover: { textDecoration: 'underline' } }}> 
          Voltar para a home 
        </Text>
      </NextLink>
    </Box>
</Box>
  )
}

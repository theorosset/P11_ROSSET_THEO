import Header from '../../Component/Header/Header';
import Banniere from '../../Component/Banniere/Banniere';
import ArticleList from '../../Component/Article/ArticleList';  
import { FC } from 'react';

const  App: FC = () => {
  return (
    <div className="App">
          <Header />
          <Banniere isHome={true}/>
          <div className='app__container--articles'>
            <ArticleList />
          </div>
    </div>
  );
}

export default App;
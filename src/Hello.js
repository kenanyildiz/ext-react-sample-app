import { Panel } from '@sencha/ext-react-classic'

/*
* Here: We request to import our custom Hello package which in ext-react/packages/hello
* On the older version, we import it in this way => import { HelloWorld } from '@extjs/reactor/classic'
*
* */

function Hello() {
  return (
    <div className="Hello">
      {/*<Panel html={'HelloWorldView'}></Panel>*/}
      {/* HelloWorld ExtJS component should place here */}
    </div>
  );
}

export default Hello;

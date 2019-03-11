import { HomePage } from '../pages/Home/Home';

const homePage = new HomePage();

fixture('login');


test('login', async t => {
  homePage.open();
});

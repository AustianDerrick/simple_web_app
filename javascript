console.log('Running tests...');

// Example test
function testHomePageTitle() {
    const title = document.querySelector('h1').textContent;
    if (title === 'Welcome to Simple Web App') {
        console.log('Test passed!');
    } else {
        console.log('Test failed!');
    }
}

testHomePageTitle();

# Weather Task
## some noteworthy points:
- All of the bonus tasks are implemented (including setting the default location by using the Geolocation API).
- The redux state update actions are triggered by **custom hooks** (a hook per action).
- The global state is saved to **localstorage** so it will be saved for future use (after refresh or when coming back to the website).
- The website is fully **responsive**.
- The input validation in the search bar is done with a **Regexp**.
- The auto-complete request is sent after a **timeout** of 300ms to avoid unnecessary multiple requests.
- Because of the time limit I only put effort into the design of the home page. The emphasis in the favorites page was on functionality.

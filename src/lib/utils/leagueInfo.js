/*   STEP 1   */
export const leagueID = "941080361071648768"; // your league ID
export const leagueName = "She Did What for a Purse?!"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Co-Commissioner Smith, COO Hughes, fellow owners, and internet people, we come together for the 4th year of the Global Dan “She Did What For a Purse?!?” Dynasty Fantasy Football League. Who would have guessed that our love for getting blown by a chick that we met at church would bring us together through all of these years. </p>
  <p>First of all, we would like to congratulate The Fantasy Football Team on their 1st championship and RangerLeb on his runner-up finish last season. I’d like to be the first to tell you Hughes, as the reigning, defending champion, that L + ratio + you’re trash + your window is closed + I have Simon and Paul, who do you have + you’re not the Rowdy of Goucher + your city is on fire.</p>
  <p>Tonight, we stand together as owners of the greatest dynasty league this world has ever seen, regardless of sport. Yes, we have had some owner turnover and a few C-Words thrown around, but I can assure you that we are confident in all of our owners. Whether their windows are open or windows are closed, whether they don’t deserve to have C-words yelled at them or do deserve to have C-words yelled at them, whether they were a part of the original 12 or are honest internet people, our League is strong. Together, we continue to move forward to become a more perfect League, a League founded on fellatio.</p>
  <p>I come before you all tonight as we have highly underestimated the power of Joe Manchin and Kyrsten Sinema. Its obvious that a few things will need to be added to the bylaws and some amendments will need to be voted on. These are the orders of business that we will need to discuss before the start of the season:</p>
  <p>So on this night, in our 4th year as a League, I’ve come to report on the state of dynasty - the State of the League. And my report is this: The State of the League is strong because you, the owners, are active. We are stronger today than we were a year ago. And we will be stronger a year from now than we are today. This is our moment to meet and overcome the challenges of our time. Shit talk and C-Words will continue to be used, most likely to you RangerLeb, but that is what makes our League so great. The competitive spirit brings us together, to defeat whoever just won the championship, and we will as one owner, one League, the Global Dan League. </p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
       {
      "managerID": "390791499534643200",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Luke Regan",
      "location": "Pittsburgh", // (optional)
      "bio": "Before three notes of the pipe came fluttering you heard a sound like armies muttering, and the muttering grew to a grumbling, and the grumbling grew to a mighty rumbling, and out of the houses the rats came tumbling.",
      "photo": "/managers/luke.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "ACLs", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1071, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "The Pipers are reloading and rebuilding at the same time, all the time.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    

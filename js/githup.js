async function fetchGitHubUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

async function updateUserInfo() {
  const usernameElement = document.getElementById('username');
  const nicknameElement = document.getElementById('nickname');
  const bioElement = document.getElementById('bio');
  const followerCountElement = document.getElementById('follower-count');
  const followingCountElement = document.getElementById('following-count');
  const repoCountElement = document.getElementById('repo-count');
  const flagIconElement = document.getElementById('flag-icon');
  const memberYearsElement = document.getElementById('member-years');
  const repo = document.getElementById('member-years');

  const username = 'Yorichii-XO'; 
  const userData = await fetchGitHubUserData(username);

  if (userData) {
    usernameElement.textContent = userData.name || 'Full Name not provided';
    nicknameElement.textContent = `${userData.login}`;
    bioElement.textContent = userData.bio || 'No bio available';
    followerCountElement.textContent = ` ${userData.followers}`;
    followingCountElement.textContent = ` ${userData.following}`;
    repoCountElement.textContent = ` ${userData.public_repos}`;

    const userCountry = userData.location; 
    if (userCountry && userCountry.toLowerCase().includes('morocco')) {
      flagIconElement.src = 'PATH_TO_MOROCCO_FLAG_ICON'; 
    } else {
      flagIconElement.src = 'DEFAULT_FLAG_ICON'; 
    }

    const accountCreationDate = moment(userData.created_at);
    const currentDate = moment();
    const memberYears = currentDate.diff(accountCreationDate, 'years');
    memberYearsElement.textContent = `Member for ${memberYears} years`;
  }
}

updateUserInfo();
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

async function fetchGitHubUserRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData = await response.json();
        return reposData;
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        return null;
    }
}

async function updateUserInfo(username) {
    const defaultUsername = 'Yorichii-XO'; 

    const usernameElement = document.getElementById('username');
    const nicknameElement = document.getElementById('nickname');
    const bioElement = document.getElementById('bio');
    const followerCountElement = document.getElementById('follower-count');
    const followingCountElement = document.getElementById('following-count');
    const repoCountElement = document.getElementById('repo-count');
    const flagIconElement = document.getElementById('flag-icon');
    const memberYearsElement = document.getElementById('member-years');
    const avatar = document.getElementById('avatar');
    const cardsContainer = document.querySelector('.cards-container');

    const userData = await fetchGitHubUserData(defaultUsername); 
    const reposData = await fetchGitHubUserRepos(username); 

    if (userData) {
        usernameElement.textContent = userData.name || 'Full Name not provided';
        nicknameElement.textContent = `${userData.login}`;
        bioElement.textContent = userData.bio || 'No bio available';
        followerCountElement.textContent = ` ${userData.followers}`;
        followingCountElement.textContent = ` ${userData.following}`;
        repoCountElement.textContent = ` ${userData.public_repos}`;
        avatar.src = userData.avatar_url;

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

    displayUserRepos(reposData);
}

const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", async (e) => {
    const username = e.target.value.trim();
    if (username !== '') {
        await updateUserInfo(username);
    } else {
        await updateUserInfo('Yorichii-XO'); 
    }
});

async function prooo(username) {
    const defaultUsername = 'Yorichii-XO'; 

    const usernameElement = document.getElementById('usernamee');
    const nicknameElement = document.getElementById('nicknamee');
    const bioElement = document.getElementById('bio');
    const followerCountElement = document.getElementById('follower-count');
    const followingCountElement = document.getElementById('following-count');
    const repoCountElement = document.getElementById('repo-count');
    const flagIconElement = document.getElementById('flag-icon');
    const avatar = document.getElementById('avatar');
    const cardsContainer = document.querySelector('.cards-container');

    const userData = await fetchGitHubUserData(defaultUsername); 
    const reposData = await fetchGitHubUserRepos(username); 
    if (userData) {
        usernameElement.textContent = userData.name || 'Full Name not provided';
        nicknameElement.textContent = `${userData.login}`;
        bioElement.textContent = userData.bio || 'No bio available';
        followerCountElement.textContent = ` ${userData.followers}`;
        followingCountElement.textContent = ` ${userData.following}`;
        repoCountElement.textContent = ` ${userData.public_repos}`;
        avatar.src = userData.avatar_url;

        const userCountry = userData.location;

        if (userCountry && userCountry.toLowerCase().includes('morocco')) {
            flagIconElement.src = 'PATH_TO_MOROCCO_FLAG_ICON';
        } else {
            flagIconElement.src = 'DEFAULT_FLAG_ICON';
        }
        const memberYearsElement = document.getElementById('member-years');

        const accountCreationDate = moment(userData.created_at);
        const currentDate = moment();
        const memberYears = currentDate.diff(accountCreationDate, 'years');
        memberYearsElement.textContent = `Member for ${memberYears} years`;
    }

    displayUserRepos(reposData);
}

const profileButton = document.getElementById('profileElement');
profileButton.addEventListener('click', async () => {
    const searchInputValue = searchInput.value.trim();
    if (searchInputValue !== '') {
        await profile(searchInputValue);
    }
});
function displayUserRepos(reposData) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    if (reposData) {
        reposData.forEach((repo, index) => {
            const repoCard = document.createElement('div');
            repoCard.className = 'card p-1 bg-white relative';
            repoCard.innerHTML = `
                <div class="flex">
                    <span id="repo-name-${index}" class="text-sm font-semibold">${repo.name}</span>
                    <h6  class="h6 rounded-md absolute right-0 mr-2">&nbsp; ${repo.private ? 'Private' : 'Public'}&nbsp;</h6>
                </div>
                <p id="repo-description-${index}" class="text-black">${repo.description || 'No description available'}</p>
                <p id="repo-language-${index}" class="text-gray-500" style="position: absolute; bottom: 0;">
                    <span class="circ"></span>${repo.language || 'No language specified'}
                </p>
            `;
            cardsContainer.appendChild(repoCard);
        });
    }
}

updateUserInfo('Yorichii-XO'); 

function toggleIconVisibility() {
  const input = document.getElementById('search');
  const icon = document.getElementById('searchIcon');
  if (input.value.trim() !== '') {
      icon.classList.add('hidden'); 
  } else {
      icon.classList.remove('hidden'); 
  }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
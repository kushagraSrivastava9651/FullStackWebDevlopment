document.addEventListener("DOMContentLoaded", function () {
    const searchbutton = document.getElementById('search-button')
    const user_name_input = document.getElementById('user-input')
    const stats_container = document.getElementById('stats-container')

    const easyProgressCircle = document.querySelector('.easy-progress')
    const mediumProgressCircle = document.querySelector('.medium-progress')
    const hardProgressCircle = document.querySelector('.hard-progress')


    const easyLabelCircle = document.getElementById('Easy-label')
    const mediumLabelCircle = document.getElementById('Medium-label')
    const hardLabelCircle = document.getElementById('Hard-label')
    const cardStatsContainer = document.querySelector('.stats-card')


    function validateUserName(user_name) {
        if (user_name === '') { alert('Not emppty allowed'); return false }
        const regex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!regex) { alert('invalid username'); return false; }
        return regex.test(user_name);

    }

    function updateProgress(solved,total,label,circle){
       const progressDegree=(solved/total)*100;
       circle.style.setProperty("--progress-degree",`${progressDegree}%`)
       label.textContent=`${solved}/${total}`
    }


    function displayUserData(parsedData){
        const totalQuestion=parsedData.data.allQuestionsCount[0].count
        const totalEasyQuestion=parsedData.data.allQuestionsCount[1].count
        const totalMediumQuestion=parsedData.data.allQuestionsCount[2].count
        const totalHardQuestion=parsedData.data.allQuestionsCount[3].count

        const totalQuestionSolved=parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count
        const totalEasyQuestionSolved=parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count
        const totalMediumQuestionSolved=parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count
        const totalHardQuestionSolved=parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count

        updateProgress(totalEasyQuestionSolved,totalEasyQuestion,easyLabelCircle,easyProgressCircle)
        updateProgress(totalMediumQuestionSolved,totalMediumQuestion,mediumLabelCircle,mediumProgressCircle)
        updateProgress(totalEasyQuestionSolved,totalHardQuestion,hardLabelCircle,hardProgressCircle)

        const cardData=[
            {
                label:'Overall Submission:',
                value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions,

            },
            {
                label:'Overall Easy  Submission:',
                value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions,
                
            },
            {
                label:'Overall Medium Submission:',
                value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions,
                
            },
            {
                label:'Overall Hard Submission:',
                value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions,
                
            }
        ]
        console.log('card ka data',cardData)

        cardStatsContainer.innerHTML=cardData.map(
            data=>{
                return `
                <div class="card">
                <h4>${data.label}</h4>
                 <p>${data.value}</p>
                 </div>
                `
            }
        ).join("")

    }

    async function fetchUserDetails(user_name) {

        var cors_api_host = 'https://cors-anywhere.herokuapp.com/';

        const url = `https://leetcode.com/graphql`
        try {
            searchbutton.textContent = 'Searching...'
            searchbutton.disabled = true;
            // const response=await fetch(url);

            const targetUrl = 'https://leetcode.com/graphql';
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: `
      query userSessionProgress($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
                variables: { "username": `${user_name}` }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };

            const response = await fetch(cors_api_host + targetUrl, requestOptions);
            if (response.ok == false) {
                throw new Error('unable to fetch url')
            }
            const parsedData = await response.json();
            console.log('data', parsedData)
            displayUserData(parsedData)


        }
        catch (error) {
            stats_container.innerHTML = `<p>No data found</p>`
        }
        finally {
            searchbutton.textContent = 'Search'
            searchbutton.disabled = false;
        }
    }
    searchbutton.addEventListener('click', function () {
        const user_name = user_name_input.value;

        console.log('logging.... : ', user_name)

        if (validateUserName(user_name)) {
            fetchUserDetails(user_name)
        }
    })

})
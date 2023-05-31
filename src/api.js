import axios from "axios";

export const getQuiz = async (videoId) => {
  //   let response = {};
  try {
    // let response = await axios.get(
    //   "http://81da-34-136-109-18.ngrok.io/?video_id=" + videoId
    // );
    // console.log("response received");
    // response = JSON.stringify(response);
    // response = JSON.parse(response);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let questions = [
      {
        question:
          "It can sting when a stranger doesn't laugh at your joke, but it does not make sense to react strongly to a  _______  with little impact on your life .this is why it can be helpful to reflect on yourself and ask yourself if the other person is actually rejecting you.",
        options: ["Rejection", "Action", "Acquiring", "Activity"],
        answer: "rejection",
      },
      {
        question:
          "The next time you feel rejected, try asking yourself these  _______ .Is this someone who knows you well and whose opinion you hold dear?",
        options: ["Questions", "Interrogation", "Question", "Challenge"],
        answer: "questions",
      },
      {
        question:
          "It can sting when a stranger doesn't laugh at your joke, but it does not make sense to react strongly to a rejection with little  _______  on your life .this is why it can be helpful to reflect on yourself and ask yourself if the other person is actually rejecting you.",
        options: ["Impact", "Collision", "Engagement", "Flick"],
        answer: "impact",
      },
      {
        question:
          "We're sorry.FMRI studies have found that rejection enlists brain activity in multiple neural regions that process physical  _______ , using terms like crushed or broken-hearted.",
        options: ["Albuminuria", "Ague", "Abscess", "Pain"],
        answer: "pain",
      },
      {
        question:
          "We're sorry.FMRI studies have found that rejection enlists brain activity in multiple neural  _______  that process physical pain, using terms like crushed or broken-hearted.",
        options: ["Bag", "Regions", "Addition", "Breakage"],
        answer: "regions",
      },
      {
        question:
          "But it's worth noting that these interpersonal rejections have a social element that distinguishes them from not getting a job.it's impossible to confirm this kind of evolutionary  _______ , but wherever this warning system came from, it doesn't include instructions for how to process this intense emotional experience.",
        options: ["Theory", "Key", "Rationale", "Interpretation"],
        answer: "theory",
      },
      {
        question:
          "But it's worth noting that these interpersonal rejections have a social element that distinguishes them from not getting a job.it's impossible to confirm this  _______  of evolutionary theory, but wherever this warning system came from, it doesn't include instructions for how to process this intense emotional experience.",
        options: ["Pigeonhole", "Kind", "Way", "Rubric"],
        answer: "kind",
      },
      {
        question:
          "We're sorry.FMRI studies have found that rejection enlists brain activity in multiple neural regions that process physical pain, using  _______  like crushed or broken-hearted.",
        options: ["Binomial", "Constant", "Numerical Quantity", "Terms"],
        answer: "terms",
      },
      {
        question:
          "It can sting when a stranger doesn't laugh at your joke, but it does not make sense to react strongly to a rejection with little impact on your  _______  .this is why it can be helpful to reflect on yourself and ask yourself if the other person is actually rejecting you.",
        options: ["Annals", "Life", "Biography", "Ancient History"],
        answer: "life",
      },
    ];
    let urls = [
      "sxc-7OrVOKU",
      "5motuzyLXIk",
      "k0GQSJrpVhM",
      "4hzIbkzYAAs",
      "N2apCx1rlIQ",
    ];
    let summaries = [
      "Rejection hurts It's incredibly painful to feel like you're not wanted, and we do mean painful. We're sorry.",
      "FMRI studies have found that rejection enlists brain activity in multiple neural regions that process physical pain, using terms like crushed or broken-hearted. This could occur when we're abandoned by a romantic partner, excluded from a group or outright discriminated against. But it's worth noting that these interpersonal rejections have a social element that distinguishes them from not getting a job.",
      "it's impossible to confirm this kind of evolutionary theory, but wherever this warning system came from, it doesn't include instructions for how to process this intense emotional experience. The next time you feel rejected, try asking yourself these questions.",
      "Is this someone who knows you well and whose opinion you hold dear? Or is it just a loose acquaintance? If it's the latter, that might help you answer the second question. Does this rejection really matter? It can sting when a stranger doesn't laugh at your joke, but it does not make sense to react strongly to a rejection with little impact on your life .",
      "this is why it can be helpful to reflect on yourself and ask yourself if the other person is actually rejecting you. This may seem an odd question, but you may find that while you didn't treat you as you would have liked, they still value your relationship.",
    ];
    let data = {
      message: "success",
      urls: urls,
      summaries: summaries,
      questions: questions,
    };
    let response = {
      data: data,
    };
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

// {
//     questions: [
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Apple",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Mango",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Banana",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Apple",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Mango",
//       },
//     ],
//     summaries: [
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//     ],
//     urls: [
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//     ],
//   };

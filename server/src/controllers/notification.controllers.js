import { messaging } from "../firebase.js";
import { getToken } from "firebase/messaging";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { app } from "../firebase.js";

const notification = asyncHandler(async (req, res) => {
  try {
    const { message} = req.body;
    const userId ="juTtklcvlVOr3qr1dWGfP6yA7Y23";
    if (!userId) {
      throw new apiError(400, "userId is required");
    }
    if (!message) {
      throw new apiError(400, "send the required message ");
    }

    // Retrieve the token from Firestore
    // const tokenRef = app.collection('tokens').doc(userId);
    // const doc = await tokenRef.get();
    // const token = doc.data().token;
    const token = "cmwAoIIfRfWEVgLxl8jRxK:APA91bHIgyDhhQ2Hp4udeOS_EH-lidk96Mr_2Kucgw4Ka72OoPoGuoDxKZo2Uj5fHg9D7S_EHz2WEmPl9X96JYttw99rOuLHOSUWbgBbFOQQ4X9yPdeILCrwiPntgKB2bDsAaG_0fVJO";

    // Get the messaging token
    const currentToken = await getToken(messaging, {
      vapidKey: "BKP_BG7FKEMCR405-Hht8o7Wh-jv41MtK1xp7a2w06Y4fH0ylcGuEfYDRaqGCXDM0Z4E7LJVUhfnoQok_jauqVU"
    });

    if (currentToken) {
      // Send the message using messaging instance
      messaging.send({
        token: token,
        data: {
          message: message,
        },
      })
      .then(() => {
        console.log("Notification sent successfully to user:", userId);
      })
      .catch((error) => {
        console.error("Error sending notification to user:", userId, error);
      });
    } else {
      console.log("No registration token available for user:", userId);
    }

    return apiResponse(res, {
      message: "Notification sent successfully to user.",
    });
  } catch (error) {
    console.error("Error sending notifications:", error);
    return apiError(res, 500, "Internal Server Error");
  }
});

export { notification };

// import { messaging } from "../firebase.js";
// import { getToken } from "firebase/messaging";
// import { asyncHandler } from "../utils/asyncHandler.js";
// import { apiResponse } from "../utils/apiResponse.js";
// import { apiError } from "../utils/apiError.js";
// import { ref } from "../firebase.js";

// const notification = asyncHandler(async (req, res) => {  
//   try {
//     const { message, userId } = req.body;
//     if (!userId) {
//       throw new apiError(400, "userId is required");
//     }
//     if (!message) { 
//       throw new apiError(400, "send the requied message ");
//     }
 
//     const { token } = ref.child('token').child(userId).child('token');

//     getToken(messaging, {
//       vapidKey:
//         "BKP_BG7FKEMCR405-Hht8o7Wh-jv41MtK1xp7a2w06Y4fH0ylcGuEfYDRaqGCXDM0Z4E7LJVUhfnoQok_jauqVU",
//     })
//       .then((currentToken) => {
//         if (currentToken) {
//           messagingInstance
//             .send({
//               token: token,
//               data: {
//                 message: message,
//                 user: user.name,
//               },
//             })
//             .then(() => {
//               console.log(
//                 "Notification sent successfully to school:",
//                 school.name
//               );
//             })
//             .catch((error) => {
//               console.error(
//                 "Error sending notification to school:",
//                 school.name,
//                 error
//               );
//             });
//         } else {
//           console.log(
//             "No registration token available for school:",
//             user.name
//           );
//         }
//       })
//       .catch((err) => {
//         console.log(
//           "An error occurred while retrieving token for school:",
//           user.name,
//           err
//         );
//       });

//     return apiResponse(res, {
//       message: "Notifications sent successfully to user.",
//     });
//   } catch (error) {
//     console.error("Error sending notifications:", error);
//     return apiError(res, 500, "Internal Server Error");
//   }   
// });

// export  {notification};

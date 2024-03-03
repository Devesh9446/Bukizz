import { messaging } from "../firebase.js";
import { getToken } from "firebase/messaging";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { ref } from "../firebase.js";

const notification = asyncHandler(async (req, res) => {  
  try {
    const { message, userId } = req.body;
    if (!userId) {
      throw new apiError(400, "userId is required");
    }
    if (!message) { 
      throw new apiError(400, "send the requied message ");
    }
 
    const { token } = ref.child('token').child(userId).child('token');

    getToken(messaging, {
      vapidKey:
        "BKP_BG7FKEMCR405-Hht8o7Wh-jv41MtK1xp7a2w06Y4fH0ylcGuEfYDRaqGCXDM0Z4E7LJVUhfnoQok_jauqVU",
    })
      .then((currentToken) => {
        if (currentToken) {
          messagingInstance
            .send({
              token: token,
              data: {
                message: message,
                user: user.name,
              },
            })
            .then(() => {
              console.log(
                "Notification sent successfully to school:",
                school.name
              );
            })
            .catch((error) => {
              console.error(
                "Error sending notification to school:",
                school.name,
                error
              );
            });
        } else {
          console.log(
            "No registration token available for school:",
            user.name
          );
        }
      })
      .catch((err) => {
        console.log(
          "An error occurred while retrieving token for school:",
          user.name,
          err
        );
      });

    return apiResponse(res, {
      message: "Notifications sent successfully to user.",
    });
  } catch (error) {
    console.error("Error sending notifications:", error);
    return apiError(res, 500, "Internal Server Error");
  }   
});

export  {notification};

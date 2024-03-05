// import { messaging } from "../firebase.js";
import { getMessaging, getToken } from "firebase/messaging";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
// import { ref } from "../firebase.js";
import { getDatabase, ref, child, get } from "firebase/database";

const notification = async (message ,userId) => {
    try {
        // const { message, userId } = req.body;
        if (!userId) {
            throw new apiError(400, "userId is required");
        }
        if (!message) {
            throw new apiError(400, "send the requied message ");
        }
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `token/${userId}`));
        if(snapshot.exists()) {
            const token = snapshot.val().token;
            console.log("token :" ,token);
            const messaging = getMessaging();

            getMessaging().then
            // getToken(messaging, {
            //     vapidKey:
            //         "BKP_BG7FKEMCR405-Hht8o7Wh-jv41MtK1xp7a2w06Y4fH0ylcGuEfYDRaqGCXDM0Z4E7LJVUhfnoQok_jauqVU",
            // })
            //     .then((currentToken) => {
            //         if (currentToken) {
            //             messagingInstance
            //                 .send({
            //                     token: token,
            //                     data: {
            //                         message: message,
            //                         user: user.name,
            //                     },
            //                 })
            //                 .then(() => {
            //                     console.log(
            //                         "Notification sent successfully to school:",
            //                         school.name
            //                     );
            //                 })
            //                 .catch((error) => {
            //                     console.error(
            //                         "Error sending notification to school:",
            //                         school.name,
            //                         error
            //                     );
            //                 });
            //         } else {
            //             console.log(
            //                 "No registration token available for school:",
            //                 user.name
            //             );
            //         }
            //     })
            //     .catch((err) => {
            //         console.log(
            //             "An error occurred while retrieving token for school:",
            //             user.name,
            //             err
            //         );
            //     });

            return apiResponse(res, {
                message: "Notifications sent successfully to user.",
            });

        } else {
            console.log("no  such user!");
        }
        // .then((snapshot) => {
        //     if (snapshot.exists()) {
        //         console.log(snapshot.val());
        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });

        // const { token } = ref.child('token').child(userId).child('token');
       
    } catch (error) {
        console.error("Error sending notifications:", error);
        // return apiError(res, 500, "Internal Server Error");
    }
}

export { notification };
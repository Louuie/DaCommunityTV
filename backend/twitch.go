package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func getFollowedStreams(c *gin.Context) {
	url := "https://api.twitch.tv/helix/streams/followed?user_id=184772590"
	client := http.Client{}
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatalln(err)
	}

	req.Header = http.Header{
		"Content-Type":  {"application/json"},
		"Authorization": {"Bearer stk8y0fe014qjtxgpvgzymrq4c7swo"},
		"Client-Id":     {"gp762nuuoqcoxypju8c569th9wz7q5"},
	}

	resp, err := client.Do(req)
	if err != nil {
		log.Fatalln(err)
	}
	// Read the response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}
	var ts TwitchResponse
	json.Unmarshal(body, &ts)
	// Converts the body
	c.JSON(http.StatusOK, ts.Data)
}

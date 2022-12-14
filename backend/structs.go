package main

import (
	"time"
)

type TwitchResponse struct {
	Data []struct {
		ID           string    `json:"id,omitempty"`
		UserID       string    `json:"user_id,omitempty"`
		UserLogin    string    `json:"user_login,omitempty"`
		UserName     string    `json:"user_name,omitempty"`
		GameID       string    `json:"game_id,omitempty"`
		GameName     string    `json:"game_name,omitempty"`
		Type         string    `json:"type,omitempty"`
		Title        string    `json:"title,omitempty"`
		ViewerCount  int       `json:"viewer_count,omitempty"`
		StartedAt    time.Time `json:"started_at,omitempty"`
		Language     string    `json:"language,omitempty"`
		ThumbnailURL string    `json:"thumbnail_url,omitempty"`
		TagIds       []string  `json:"tag_ids,omitempty"`
	} `json:"data"`
	Pagination struct {
		Cursor string `json:"cursor"`
	} `json:"pagination"`
}

func twitchOAuth() (string, string) {
	var access_token = "stk8y0fe014qjtxgpvgzymrq4c7swo"
	var client_id = "gp762nuuoqcoxypju8c569th9wz7q5"
	return access_token, client_id
}

package com.restfulwebservices.services;
import java.util.List;

import com.restfulwebservices.models.*;

public interface TweetService {
	public abstract List<Tweet> getTweets(String estatus);
	public abstract Tweet getTweet(int id);
	public abstract void createTweet(Tweet tweet);
	public abstract void updateTweet(Tweet tweet);
	public abstract void deleteTweet(int id);
}
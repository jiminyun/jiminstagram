from rest_framework import serializers
from . import models
from jimistagram.users import models as user_models
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

class SmallImageSerializer(serializers.ModelSerializer):

    """ Used for the notifications """
    class Meta:
        model = models.Image
        fields = (
            'file',
        )

class CountImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'like_count',
            'comment_count'
        )

class FeedUserSeralizer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )

class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSeralizer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
            'image'
        )

class LikeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Like
        fields = '__all__'

class FeedUserSeralizer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )

class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):
    
    comments = CommentSerializer(many=True)
    creator = FeedUserSeralizer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_count', 
            'creator',
            'tags',
            'created_at'
        )

class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption'
        )        


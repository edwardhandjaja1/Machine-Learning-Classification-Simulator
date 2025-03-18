from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .ml_models import train_model

@api_view(['POST'])
def classify(request):
    data = request.data
    model_name = data.get("model")
    X_train = data.get("X_train")
    y_train = data.get("y_train")
    X_test = data.get("X_test")

    if not all([model_name, X_train, y_train, X_test]):
        return Response({"error": "Missing parameters"}, status=400)

    result = train_model(model_name, X_train, y_train, X_test)
    return Response(result)


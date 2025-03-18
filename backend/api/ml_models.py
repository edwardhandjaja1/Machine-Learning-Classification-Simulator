from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import Perceptron
import numpy as np

def train_model(model_name, X_train, y_train, X_test):
    X_train = np.array(X_train)
    y_train = np.array(y_train)
    X_test = np.array(X_test)

    if model_name == "naive_bayes":
        model = GaussianNB()
    elif model_name == "knn":
        model = KNeighborsClassifier(n_neighbors=3)
    elif model_name == "perceptron":
        model = Perceptron()
    else:
        return {"error": "Invalid model"}

    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    
    return {"predictions": predictions.tolist()}

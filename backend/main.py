from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="ECOGEN AI",
    description="Environmental Intelligence Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5176",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5176"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "project": "ECOGEN AI",
        "message": "Environmental Intelligence API is running",
        "status": "success"
    }

@app.get("/api/environment")
def environment():
    return {
        "aqi": 85,
        "temperature": 28.5,
        "forest_coverage": 68.4,
        "carbon_emissions": 412.5,
        "risk_score": 32,
        "data_type": "DEMO"
    }

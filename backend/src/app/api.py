# this is fast-api file
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

strategy_list = [
    {
        "name":"default_name",
        "nickname":"dafault_nick",
        "age":1,
    }
]

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to annuity helper."}

@app.post("/stra", tags=["stra"])
async def add_todo(strategy: dict) -> dict:
    strategy.append(strategy)
    print(strategy)
    return {
        "data": { "strategy added." }
    }

from django.conf import settings
import requests

class SteamApp:
    api_key = settings.STEAM_API_KEY

    @classmethod
    def get_item(cls, market_hash_name, *args, **kwargs):
        return requests.get(f'https://api.steampowered.com/IGameInventory/GetAssetPrices/v1/?appid=730&key={cls.api_key}')
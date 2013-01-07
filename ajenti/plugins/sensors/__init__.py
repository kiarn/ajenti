from ajenti.api import *
from ajenti.plugins import *


info = PluginInfo(
    title='Sensors',
    icon='leaf',
    dependencies=[
        PluginDependency('main'),
        PluginDependency('dashboard'),
        BinaryDependency('sensors'),
    ],
)


def init():
    import hostname
    import uptime
    import load
    import memory
    import cpu